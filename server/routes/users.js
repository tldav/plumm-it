// Users Routes
const router = require("express").Router();
const User = require("../models").User;

router.get("/", async (req, res) => {
	try {
		const results = await User.findAll();
		res.json(results);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	const { email, username, firstName, lastName, password } = req.body;
	// *add await to hashedPassword if the line below breaks*
	const hashedPassword = bcrypt.hashSync(password, 10);
	try {
		const newUser = await User.create(email, username, firstName, lastName, hashedPassword);

		res.json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const { email, username, firstName, lastName, password } = req.body;

	try {
		const updatedUser = await User.update(id, email, username, firstName, lastName, password);
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
