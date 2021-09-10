import axios from "axios";

const API = {
	createUser: (newUser) => {
		return axios.post("/api/users/register", newUser);
	},
	loginUser: (credentials) => {
		return axios.post("/api/users/login", credentials);
	},
	logoutUser: () => {
		return axios.get("/api/users/logout");
	},
	getCurrentUser: () => {
		return axios.post("/api/users/current");
	},
	validateUsername: (username) => {
		return axios.post("/api/users/validate", username);
	},
	updateUser: (id, updatedUser) => {
		return axios.put("/api/users/" + id, updatedUser);
	},
	findAllThreads: () => {
		return axios.get("/api/threads");
	},
	findAllThreadsInCategory: (id) => {
		return axios.get("/api/threads/categories/" + id);
	},
	// responds with an object containing the thread by id and all comments belonging to that thread
	findOneThread: (id) => {
		return axios.get("/api/threads/" + id);
	},
	createThread: (newThread) => {
		return axios.post("/api/threads", newThread);
	},
	updateThread: (id, updatedThread) => {
		return axios.put("/api/threads/" + id, updatedThread);
	},
	upvoteThread: (threadId, userId) => {
		return axios.put("/api/threads/upvote/" + threadId, userId);
	},
	downvoteThread: (threadId, userId) => {
		return axios.put("/api/threads/downvote/" + threadId, userId);
	},
	createComment: (newComment) => {
		return axios.post("/api/comments", newComment);
	},
	updateComment: (id, updatedComment) => {
		return axios.put("/api/comments/" + id, updatedComment);
	},
	upvoteComment: (commentId, userId) => {
		return axios.put("/api/comments/upvote/" + commentId, userId);
	},
	downvoteComment: (commentId, userId) => {
		return axios.put("/api/comments/downvote/" + commentId, userId);
	},
	//***********************************experimental
	findAllThreadVotes: (threadId) => {
		return axios.get("/api/threads/votes/" + threadId);
	},
	//***********************************experimental
	//***********************************experimental
	findAllUserVotes: (userId) => {
		return axios.get("/api/users/votes/" + userId);
	},
	//***********************************experimental
};

export default API;
