// Server
const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const cors = require("cors");
const passport = require("./config/passport");
const sessionStore = require("./config/session");
require("dotenv").config();
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
	cors({
		origin: "http://localhost/3000" || "https://plummit.herokuapp.com/",
		methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		store: sessionStore,
		resave: false,
		saveUninitialized: false,
		cookie: {
			// maxAge: 1000 * 60 * 60 * 24, // cookie expires in 24 hours
			maxAge: 3600000, // cookie expires in 1 hour
			sameSite: none,
		},
	})
);

console.log("sessionStore: ", sessionStore);

// Serve static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log("***req.session: ", req.session);
	console.log("***req.user: ", req.user);
	console.log("\n", "\n");
	next();
});

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
