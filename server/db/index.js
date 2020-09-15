const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "plumm_db"
});

connection.connect((err) => {
	if (err) {
		console.log(err);
	}
});

const db = {
	allUsers: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM users`, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	allThreads: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM threads`, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	},
	allComments: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM comments`, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	}
};

module.exports = db;
