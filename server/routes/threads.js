// Threads Routes
const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		const allThreads = await db.Thread.findAll();
		res.json(allThreads[0]);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const dbQueries = [db.Thread.findOne(id), db.Thread.findThreadComments(id)];

	try {
		const threadsAndComments = await Promise.all(dbQueries);
		const allResultsObj = {
			thread: threadsAndComments[0][0],
			comments: threadsAndComments[1][0]
		};
		res.json(allResultsObj);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/category/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const allThreadsInCategory = await db.Thread.findCategoryThreads(id);
		res.json(allThreadsInCategory[0]);
	} catch {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	const { title, body, userId, categoryId } = req.body;
	try {
		const newThread = await db.Thread.create(title, body, userId, categoryId);
		res.json(newThread);
	} catch (err) {
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
		res.status(500).json(err);
	}
});

router.put("/upvote/:id", async (req, res) => {
	const threadId = req.params.id;
	const userId = req.body.userId;

	try {
		const upvote = await db.Thread.upvote(threadId, userId);
		res.json(upvote);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/downvote/:id", async (req, res) => {
	const threadId = req.params.id;
	const userId = req.body.userId;

	try {
		const downvote = await db.Thread.downvote(threadId, userId);
		res.json(downvote);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
