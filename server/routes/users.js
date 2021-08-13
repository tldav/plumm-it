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
		await User.create(email, username, firstName, lastName, hashedPassword);
		const loginUser = await User.findByName(username);

		req.login(loginUser[0][0], (err) => {
			if (err) throw err;
			res.send("Successfully signed up and logged in as " + loginUser[0][0].username);
		});
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
// router.post("/login", passport.authenticate("local"), (req, res) => {
// 	const { user_id, email, username, first_name, last_name, created_at, is_active } = req.user;

// 	res.json({ user_id, email, username, first_name, last_name, created_at, is_active });
// });

// TEST LOGIN ROUTE
router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) res.status(500).json(err);
		if (!user) res.send("Invalid username or password!");
		else {
			req.login(user, (err) => {
				if (err) res.status(500).json(err);
				console.log("req.user from login route", req.user);

				const { user_id, email, username, first_name, last_name, created_at, is_active } =
					req.user;

				res.json({
					user_id,
					email,
					username,
					first_name,
					last_name,
					created_at,
					is_active,
				});
			});
		}
	})(req, res, next);
});

router.get("/logout", (req, res) => {
	req.logout();
	res.json("Successfully logged out");
	console.log("***req.user from logout route", req.user);
});

router.get("/current", (req, res) => {
	const { user_id, email, username, first_name, last_name, created_at, is_active } = req.user;
	console.log("req.user from /current", req.user);

	res.json({ user_id, email, username, first_name, last_name, created_at, is_active });
});

module.exports = router;
