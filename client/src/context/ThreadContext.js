import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

export const ThreadContext = React.createContext();

const ThreadContextProvider = (props) => {
	// may separate these into two contexts in the future
	const [realThreads, setRealThreads] = useState([]);
	const [featuredThread, setFeaturedThread] = useState({});
	const [categoryThreads, setCategoryThreads] = useState([]);

	const {
		location: { pathname },
	} = useHistory();

	const forwardSlashCount = pathname.split("").filter((letter) => letter === "/");

	useEffect(() => {
		const reloadContent = async () => {
			try {
				if (forwardSlashCount.length === 1) {
					const response = await API.findAllThreads();
					setRealThreads(response.data);
				}
				if (forwardSlashCount.length === 3) {
					const response = await API.findAllThreadsInCategory(pathname.split("/")[3]);
					setCategoryThreads(response.data);
				}
				if (forwardSlashCount.length === 5) {
					const response = await API.findOneThread(pathname.split("/")[5]);
					setFeaturedThread(response.data);
				}
				return;
			} catch (error) {
				console.error(error);
			}
		};
		reloadContent();
	}, [forwardSlashCount.length, pathname]);

	const handleThreadSelect = async (id) => {
		try {
			const selectedThread = await API.findOneThread(id);
			setFeaturedThread(selectedThread.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleCategorySelect = async (id) => {
		try {
			const selectedCategory = await API.findAllThreadsInCategory(id);
			setCategoryThreads(selectedCategory.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleReturnHome = async () => {
		try {
			const response = await API.findAllThreads();
			setRealThreads(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ThreadContext.Provider
			value={{
				realThreads,
				featuredThread,
				handleThreadSelect,
				handleCategorySelect,
				categoryThreads,
				handleReturnHome,
			}}
		>
			{props.children}
		</ThreadContext.Provider>
	);
};

export default ThreadContextProvider;
