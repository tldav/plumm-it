// Users Routes
const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
	try {
		let results = await db.User.findAll();
		res.json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	const { email, username, firstName, lastName, password } = req.body;
	try {
		let newUser = await db.User.create(
			email,
			username,
			firstName,
			lastName,
			password
		);
		res.json(newUser);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { email, username, firstName, lastName, password } = req.body;

	try {
		let updatedUser = await db.User.update(
			id,
			email,
			username,
			firstName,
			lastName,
			password
		);
		res.json(updatedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
