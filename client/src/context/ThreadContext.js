import React, { useState, useEffect } from "react";
import API from "../utils/API";
import useRenderCount from "../hooks/useRenderCount";

export const ThreadContext = React.createContext();

const ThreadContextProvider = (props) => {
	const [realThreads, setRealThreads] = useState([]);
	const [featuredThread, setFeaturedThread] = useState({});

	useRenderCount("ThreadContext.jsx");

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
		try {
			const selectedThread = await API.findOneThread(id);
			setFeaturedThread(selectedThread.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCategorySelect = async (id) => {
		try {
			const selectedCategory = await API.findAllThreadsInCategory(id);
			console.log(selectedCategory.data);
		} catch (error) {
			console.log(error);
		}
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
