// User Model
const connection = require("../config").database;

module.exports = {
	findAll: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM users`, (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
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
				return resolve(results);
			});
		});
	},
	findById: (id) => {
		const sql = `CALL getUserById(?)`;
		return new Promise((resolve, reject) => {
			connection.query(sql, id, (err, results) => {
				if (err) reject(err);
				return resolve(results);
			});
		});
	},
	delete: () => {},
};
