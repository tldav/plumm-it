const mysql = require("mysql");
const { connect } = require("../routes");

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
			connection.query(
				`SELECT t.thread_id, t.title, t.body, t.created_at, t.upvotes, t.downvotes, u.username 
                    FROM threads t
                    JOIN users u
                    ON t.user_id = u.user_id;`,
				(err, results) => {
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	},
	allComments: () => {
		return new Promise((resolve, reject) => {
			connection.query(
				`SELECT * 
                    FROM threads t
                    JOIN comments c
                    ON t.thread_id = c.thread_id;`,
				(err, results) => {
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	},
	oneThread: (id) => {
		return new Promise((resolve, reject) => {
			connection.query(
				`SELECT t.thread_id, t.title, t.body, t.created_at, t.upvotes, t.downvotes, u.username 
                    FROM threads t
                    JOIN users u
                    ON t.user_id = u.user_id
                    WHERE t.thread_id = ${id};`,
				(err, results) => {
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	},
	threadComments: (id) => {
		return new Promise((resolve, reject) => {
			connection.query(
				`SELECT c.comment_id, c.parent_comment_id, c.body, c.created_at, c.upvotes, c.downvotes, u.username
                FROM comments c
                JOIN threads t ON t.thread_id = c.thread_id
                JOIN users u ON c.user_id = u.user_id
                WHERE t.thread_id = ${id};`,
				(err, results) => {
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	},
	childComments: (id) => {
		return new Promise((resolve, reject) => {
			connection.query(
				`SELECT *
            FROM comments cc
            JOIN comments pc ON pc.parent_comment_id = cc.comment_id
            WHERE cc.comment_id = ${id};`,
				(err, results) => {
					if (err) {
						return reject(err);
					}
					return resolve(results);
				}
			);
		});
	}
};

module.exports = db;
