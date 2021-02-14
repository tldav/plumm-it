const connection = require("../config");

module.exports = {
	create: (body, userId, threadId, parentCommentId) => {
		const sql = `CALL createComment(?, ?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(
				sql,
				[body, userId, threadId, parentCommentId],
				(err, results) => {
					if (err) reject(err);
					return resolve(results);
				}
			);
		});
	},
	update: (id, body) => {
		const sql = `CALL updateComment(?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [id, body], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	upvote: (commentId, userId) => {
		const sql = `CALL upvoteComment(?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [commentId, userId], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	downvote: (commentId, userId) => {
		const sql = `CALL downvoteComment(?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [commentId, userId], (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	delete: () => {}
};
