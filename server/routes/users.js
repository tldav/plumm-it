// Users Routes
const db = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
	try {
		const results = await db.User.findAll();
		res.json(results);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	const { email, username, firstName, lastName, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 10);
	try {
		const newUser = await db.User.create(
			email,
			username,
			firstName,
			lastName,
			hashedPassword
		);

		res.json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { email, username, firstName, lastName, password } = req.body;

	try {
		const updatedUser = await db.User.update(
			id,
			email,
			username,
			firstName,
			lastName,
			password
		);
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
