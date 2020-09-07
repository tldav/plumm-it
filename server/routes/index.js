const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let results = await db.all();
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;
