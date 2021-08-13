import React, { useState, useEffect } from "react";
import API from "../utils/API";

export const ThreadContext = React.createContext();

const ThreadContextProvider = (props) => {
	const [realThreads, setRealThreads] = useState([]);
	const [featuredThread, setFeaturedThread] = useState({});

	useEffect(() => {
		const getDaThreads = async () => {
			try {
				const response = await API.findAllThreads();
				setRealThreads(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getDaThreads();
	}, []);

	const value = {
		realThreads,
		featuredThread,
		actions: {
			setFeaturedThread,
		},
	};

	return <ThreadContext.Provider value={{ value }}>{props.children}</ThreadContext.Provider>;
};

export default ThreadContextProvider;
