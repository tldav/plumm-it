// Users Routes
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models").User;

router.get("/", async (req, res) => {
	try {
		const results = await User.findAll();
		res.json(results);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/register", async (req, res) => {
	const { email, username, firstName, lastName, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create(email, username, firstName, lastName, hashedPassword);

		res.json(newUser);
		// res.redirect("/login");
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

// LOGIN USER &  SEND USER DATA
router.post("/login", passport.authenticate("local"), (req, res) => {
	const { user_id, email, username, first_name, last_name, created_at, is_active } = req.user;

	res.json({ user_id, email, username, first_name, last_name, created_at, is_active });
});

// ALT LOGIN ATTEMPT
// router.post(
// 	"/login",
// 	passport.authenticate("local", {
// 		failureRedirect: "login-faiure",
// 		successRedirect: "login-success",
// 	})
// );

router.get("/login-failure", (req, res) => {
	res.send("Incorrect password. Please try again.");
	console.log("Incorrect password. Please try again.");
});

router.get("/login-success", (req, res) => {
	res.send("You have been successfully logged in");
	console.log("You have been successfully logged in");
});

router.get("/logout", (req, res) => {
	req.logout();
	res.json("Successfully logged out");
	console.log("***req.user from logout route", req.user);
});

module.exports = router;
