const connection = require("../config");

module.exports = {
	findAll: () => {
		return new Promise((resolve, reject) => {
			const sql = `CALL getAllThreads()`;
			connection.query(sql, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	findOne: (id) => {
		const sql = `CALL getOneThread(${id})`;
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	findThreadComments: (id) => {
		const sql = `CALL getThreadComments(${id})`;
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	create: (title, body, userId) => {
		const sql = `CALL createThread(?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [title, body, userId], (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	update: (id, title, body) => {
		const sql = `CALL updateThread(?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, [id, title, body], (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	upvote: () => {},
	downvote: () => {},
	delete: () => {}
};
