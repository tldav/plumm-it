// Threads Routes
const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		let results = await db.Thread.findAll();
		res.json(results[0]);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const dbQueries = [db.Thread.findOne(id), db.Thread.findThreadComments(id)];

	try {
		const response = await Promise.all(dbQueries);
		const allResultsObj = {
			thread: response[0][0],
			comments: response[1][0]
		};
		res.json(allResultsObj);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	const { title, body, userId } = req.body;
	try {
		let newThread = await db.Thread.create(title, body, userId);
		res.json(newThread);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { title, body } = req.body;

	try {
		let updatedThread = await db.Thread.update(id, title, body);
		res.json(updatedThread);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/upvote/:id", async (req, res) => {
	const id = req.params.id;

	try {
		let upvote = await db.Thread.upvote(id);
		res.json(upvote);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/downvote/:id", async (req, res) => {
	const id = req.params.id;

	try {
		let downvote = await db.Thread.downvote(id);
		res.json(downvote);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
