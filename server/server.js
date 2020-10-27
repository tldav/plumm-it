const express = require("express");
const logger = require("morgan");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(logger("dev"));

app.listen(process.env.PORT || "3001", () => {
	console.log(`Server is running on port: ${process.env.PORT || "3001"} `);
});
