import React, { createContext, useEffect, useState } from "react";
import API from "../utils/API";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [isSignupOpen, setIsSignupOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	useEffect(() => {
		const checkLoginStatus = async () => {
			const checkedUser = await API.getCurrentUser();

			if (checkedUser.data.username && !isLoggedIn) {
				setUser(checkedUser.data);
				setIsLoggedIn(true);
			} else if (!checkedUser.data.username && isLoggedIn) {
				setUser({});
				setIsLoggedIn(false);
			}
		};
		checkLoginStatus();
	}, [isLoggedIn]);

	const handleLogin = async (credentials) => {
		try {
			const loggedInUser = await API.loginUser(credentials);
			setUser({ ...loggedInUser.data });
			if (!isLoggedIn) setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignup = async (credentials) => {
		try {
			const newUser = await API.createUser(credentials);
			setUser({ ...newUser.data });
			if (!isLoggedIn) setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		try {
			await API.logoutUser();
			setUser({});
			if (isLoggedIn) setIsLoggedIn(false);
		} catch (error) {
			console.log(error);
		}
	};

	// const openSignupModal = () => {};

	return (
		<UserContext.Provider
			value={{
				user,
				handleLogin,
				handleSignup,
				handleLogout,
				isLoggedIn,
				isSignupOpen,
				setIsSignupOpen,
				isLoginOpen,
				setIsLoginOpen,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
