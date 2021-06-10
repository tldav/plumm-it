import axios from "axios";

export default {
	createUser: (newUser) => {
		return axios.post("/api/users/register", newUser);
	},
	userLogin: (credentials) => {
		return axios.post("/api/users", credentials);
	},
	updateUser: (id, updatedUser) => {
		return axios.put("/api/users/" + id, updatedUser);
	},
	findAllThreads: () => {
		return axios.get("/api/threads");
	},
	findAllThreadsInCategory: (id) => {
		return axios.get("/api/threads/category/" + id);
	},
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
		return axios.put("/api/threads/downvote" + threadId, userId);
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
};
