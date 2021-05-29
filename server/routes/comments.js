// Comments Routes
const router = require("express").Router();
const Comment = require("../models").Comment;

router.post("/", async (req, res) => {
	const { body, userId, threadId, parentCommentId } = req.body;
	try {
		const newComment = await Comment.create(body, userId, threadId, parentCommentId);
		res.json(newComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { body } = req.body;

	try {
		const updatedComment = await Comment.update(id, body);
		res.json(updatedComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/upvote/:id", async (req, res) => {
	const commentId = req.params.id;
	const userId = req.body.userId;

	try {
		const upvote = await Comment.upvote(commentId, userId);
		res.json(upvote);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/downvote/:id", async (req, res) => {
	const commentId = req.params.id;
	const userId = req.body.userId;

	try {
		const downvote = await Comment.downvote(commentId, userId);
		res.json(downvote);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
