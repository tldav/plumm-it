const express = require("express");
const logger = require("morgan");
const routes = require("./routes");

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

// Serve static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
