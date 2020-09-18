const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/users", async (req, res) => {
	try {
		let results = await db.allUsers();
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get("/threads", async (req, res) => {
	try {
		let results = await db.allThreads();
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get("/comments", async (req, res) => {
	try {
		let results = await db.allComments();
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;
