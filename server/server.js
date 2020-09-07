const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/api/temp", routes);

app.listen(process.env.PORT || "3001", () => {
	console.log(`Server is running on port: ${process.env.PORT || "3001"} `);
});
