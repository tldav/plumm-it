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

	console.log("redundant fetch? ", realThreads);

	const handleThreadSelect = async (id) => {
		const selectedThread = await API.findOneThread(id);
		setFeaturedThread(selectedThread.data);
	};

	const handleCategorySelect = async (id) => {
		const selectedCategory = await API.findAllThreadsInCategory(id);
		console.log(selectedCategory.data);
	};

	return (
		<ThreadContext.Provider
			value={{
				realThreads,
				featuredThread,
				handleThreadSelect,
				handleCategorySelect,
			}}
		>
			{props.children}
		</ThreadContext.Provider>
	);
};

export default ThreadContextProvider;
