// DB Config Index
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "plumm_db"
});

connection.connect((err) => {
	if (err) console.log(err);
});

module.exports = connection;
