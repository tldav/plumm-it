const connection = require("../config");

module.exports = {
	findAll: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM users`, (err, results) => {
				if (err) {
					return reject(err);
				}
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
					if (err) {
						return reject(err);
					}
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
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	},
	delete: () => {}
};
