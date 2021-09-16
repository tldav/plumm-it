const connection = require("./database");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const sessionConfig =
	process.env.NODE_ENV === "production"
		? {
				host: process.env.HOST,
				port: process.env.DB_PORT,
				user: process.env.USER,
				password: process.env.PASSWORD,
				database: process.env.DATABASE,
				clearExpired: true,
				checkExpirationInterval: 900000,
				expiration: 7200000,
		  }
		: {
				host: "localhost",
				port: 3306,
				user: process.env.LOCAL_DB_USER,
				password: process.env.LOCAL_DB_PASSWORD,
				database: process.env.LOCAL_DB,
				clearExpired: true,
				checkExpirationInterval: 900000,
				expiration: 7200000,
		  };

const sessionStore = new MySQLStore(sessionConfig, connection.promise);

module.exports = sessionStore;
