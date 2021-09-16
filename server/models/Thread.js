// Thread Model
const connection = require("../config").database;

module.exports = {
	findAll: () => {
		return new Promise((resolve, reject) => {
			const sql = `CALL getAllThreads()`;
			connection.query(sql, (err, results) => {
				if (err) reject(err);
				return resolve(results[0]);
			});
		});
	},
	findOne: (id) => {
		const sql = `CALL getOneThread(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, id, (err, results) => {
				if (err) reject(err);
				return resolve(results[0][0]);
			});
		});
	},
	findCategoryThreads: (id) => {
		const sql = `CALL getCategoryThreads(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, id, (err, results) => {
				if (err) reject(err);
				return resolve(results[0]);
			});
		});
	},
	findThreadComments: (id) => {
		const sql = `CALL getThreadComments(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, id, (err, results) => {
				if (err) reject(err);
				return resolve(results[0]);
			});
		});
	},
	create: (title, body, userId, categoryId) => {
		const sql = `CALL createThread(?, ?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [title, body, userId, categoryId], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	update: (id, title, body) => {
		const sql = `CALL updateThread(?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [id, title, body], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	upvote: (threadId, userId) => {
		const sql = `CALL upvoteThread(?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [threadId, userId], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	downvote: (threadId, userId) => {
		const sql = `CALL downvoteThread(?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [threadId, userId], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	//***********************************experimental*****************************
	// getThreadVotes: (threadId) => {
	// 	const sql = `SELECT * FROM thread_votes WHERE thread_id = ${threadId}`;
	// 	return new Promise((resolve, reject) => {
	// 		connection.query(sql, (err, results) => {
	// 			if (err) reject(err);
	// 			return resolve(results);
	// 		});
	// 	});
	// },
	//***********************************experimental*****************************

	remove: () => {},
};
