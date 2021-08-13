import React, { createContext, useState } from "react";
import API from "../utils/API";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	console.log("what is this/???", user);

	const contextHandleLogin = async (credentials) => {
		const loggedInUser = await API.userLogin(credentials);
		setUser({ ...loggedInUser });
	};

	return (
		<UserContext.Provider value={{ user, contextHandleLogin }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
