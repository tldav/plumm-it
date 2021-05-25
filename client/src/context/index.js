import React, { useState, useEffect } from "react";
import api from "../utils/API";
const threads = require("../thread-contents.json");

const Context = React.createContext();

export const ContextProvider = (props) => {
	const [realThreads, setRealThreads] = useState([]);
	const [featuredThread, setFeaturedThread] = useState({});

	useEffect(() => {
		const getDaThreads = async () => {
			try {
				const response = await api.findAllThreads();
				setRealThreads(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getDaThreads();
	}, []);

	const value = {
		threads,
		realThreads,
		featuredThread,
		actions: {
			setFeaturedThread,
		},
	};

	return <Context.Provider value={{ value }}>{props.children}</Context.Provider>;
};

export default Context;
