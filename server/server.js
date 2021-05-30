const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const MySQLStore = require("express-mysql-session")(session);
require("dotenv").config();
const routes = require("./routes");
const connection = require("./config").database;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "https://localhost/3000");
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// express-session middleware
const sessionStore = new MySQLStore(connection);

app.use(
	session({
		key: "my_cookie",
		secret: process.env.SESSION_SECRET,
		store: sessionStore,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

// Serve static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use((req, res, next) => {
	console.log(req.session);
	next();
});

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
