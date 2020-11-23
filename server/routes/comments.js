// Comments Routes
const db = require("../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
	const { body, userId, threadId, parentCommentId } = req.body;
	try {
		let newComment = await db.Comment.create(
			body,
			userId,
			threadId,
			parentCommentId
		);
		res.json(newComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { body } = req.body;

	try {
		let updatedComment = await db.Comment.update(id, body);
		res.json(updatedComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/upvote/:id", async (req, res) => {
	const commentId = req.params.id;
	const userId = req.body.userId;

	try {
		let upvote = await db.Comment.upvote(commentId, userId);
		res.json(upvote);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/downvote/:id", async (req, res) => {
	const commentId = req.params.id;
	const userId = req.body.userId;

	try {
		let downvote = await db.Comment.downvote(commentId, userId);
		res.json(downvote);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
