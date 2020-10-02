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

// Don't think we'll have a use for this.
router.get("/comments", async (req, res) => {
	try {
		let results = await db.allComments();
		res.json(results);
		console.log(req.params);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get("/comments/:id", async (req, res) => {
	const id = req.params.id;
	try {
		let results = await db.threadComments(id);
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get("/threads/:id", async (req, res) => {
	const id = req.params.id;
	const dbQueries = [db.oneThread(id), db.threadComments(id)];

	try {
		const response = await Promise.all(dbQueries);
		const allResultsObj = {
			thread: response[0],
			comments: response[1]
		};
		console.log(allResultsObj.comments);
		res.json(allResultsObj);
	} catch (err) {
		return console.log(err);
	}
});

// this is a test route only for db.childComments() method - unsure if we'll even use it.
router.get("/childcomments/:id", async (req, res) => {
	const id = req.params.id;
	try {
		let results = await db.childComments(id);
		res.json(results);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;
