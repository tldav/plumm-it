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
	all: () => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM temp`, (err, results) => {
				if (err) {
					return reject(err);
				}
				return resolve(results);
			});
		});
	}
};

module.exports = db;
