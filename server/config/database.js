// DB Config
const mysql = require("mysql2");
require("dotenv").config();

const connection = process.env.JAWSDB_URL
	? mysql.createPool(process.env.JAWSDB_URL)
	: mysql.createPool({
			host: "localhost",
			port: 3306,
			user: process.env.LOCAL_DB_USER,
			password: process.env.LOCAL_DB_PASSWORD,
			database: process.env.LOCAL_DB,
	  });

connection.getConnection((err) => {
	if (err) console.error(err);
});
module.exports = connection;
