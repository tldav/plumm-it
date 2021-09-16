// User Model
const connection = require("../config").database;

module.exports = {
	create: (email, username, firstName, lastName, password) => {
		const sql = `CALL createUser(?, ?, ?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(
				sql,
				[email, username, firstName, lastName, password],
				(err, results) => {
					if (err) reject(err);
					return resolve(results);
				}
			);
		});
	},
	update: (id, email, username, firstName, lastName, password) => {
		const sql = `CALL updateUser(?, ?, ?, ?, ?, ?)`;
		return new Promise((resolve, reject) => {
			connection.query(
				sql,
				[id, email, username, firstName, lastName, password],
				(err, results) => {
					if (err) reject(err);
					return resolve(results);
				}
			);
		});
	},
	findByName: (username) => {
		const sql = `CALL getUserByName(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, username, (err, results) => {
				if (err) {
					reject(err);
				}
				return resolve(results[0][0]);
			});
		});
	},
	findById: (id) => {
		const sql = `CALL getUserById(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, id, (err, results) => {
				if (err) reject(err);
				return resolve(results[0][0]);
			});
		});
	},

	//***********************************experimental*****************************
	// getUserVotes: (userId) => {
	// 	const sql = `SELECT * FROM thread_votes WHERE user_id = ${userId}`;
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
