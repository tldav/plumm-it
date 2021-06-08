// DB Config Index
const mysql = require("mysql");

const connection = process.env.JAWSDB_URL
	? mysql.createPool(process.env.JAWSDB_URL)
	: mysql.createPool({
			host: "localhost",
			port: 3306,
			user: "root",
			// added local password
			password: "" || "root",
			database: "plumm_db",
	  });

connection.getConnection((err) => {
	if (err) console.error(err);
});
module.exports = connection;
