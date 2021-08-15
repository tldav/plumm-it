import React, { createContext, useEffect, useState } from "react";
import API from "../utils/API";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [user, setUser] = useState(async () => {
	// 	const response = await API.getCurrentUser();
	// 	console.log(response.data);
	// 	return user.data ? response : {};
	// });

	const [user, setUser] = useState({});
	console.log("REAL user state from context", user);

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

	useEffect(() => {
		checkLoginStatus();
	});

	const handleLogin = async (credentials) => {
		try {
			const loggedInUser = await API.loginUser(credentials);
			setUser({ ...loggedInUser.data });
			if (!isLoggedIn) setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

	console.log("is logged in?", isLoggedIn);

	const handleSignup = async (credentials) => {
		try {
			const newUser = await API.createUser(credentials);
			setUser({ ...newUser.data });
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		try {
			await API.logoutUser();
			console.log("user logged out!!");
			setUser({});
			if (isLoggedIn) setIsLoggedIn(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<UserContext.Provider value={{ user, handleLogin, handleSignup, handleLogout, isLoggedIn }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

// import React, { createContext, useEffect, useState } from "react";
// import API from "../utils/API";

// export const UserContext = createContext();

// const UserContextProvider = (props) => {
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);

// 	const [user, setUser] = useState(() => {
// 		const localUserData = localStorage.getItem("user");
// 		return localUserData ? JSON.parse(localUserData) : {};
// 	});

// 	// console.log("REAL user state from context", user);

// 	const handleLogin = async (credentials) => {
// 		try {
// 			const loggedInUser = await API.loginUser(credentials);
// 			setUser({ ...loggedInUser.data });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleSignup = async (credentials) => {
// 		try {
// 			const newUser = await API.createUser(credentials);
// 			setUser({ ...newUser.data });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleLogout = async () => {
// 		try {
// 			await API.logoutUser();
// 			console.log("user logged out!!");
// 			setUser({});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	useEffect(() => {
// 		localStorage.setItem("user", JSON.stringify(user));
// 	}, [user]);

// 	return (
// 		<UserContext.Provider value={{ user, handleLogin, handleSignup, handleLogout }}>
// 			{props.children}
// 		</UserContext.Provider>
// 	);
// };

// export default UserContextProvider;
