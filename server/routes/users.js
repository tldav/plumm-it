// Users Routes
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models").User;

router.post("/register", async (req, res) => {
	const { email, username, firstName, lastName, password } = req.body;

	try {
		const validateUser = await User.findByName(username);

		if (validateUser)
			res.json("A user by that name already exists. Please choose an available username.");

		if (!validateUser) {
			const hashedPassword = await bcrypt.hash(password, 10);
			await User.create(email, username, firstName, lastName, hashedPassword);
			const loginUser = await User.findByName(username);

			req.login(loginUser, (err) => {
				if (err) throw err;
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
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/validate", async (req, res) => {
	try {
		const validateUser = await User.findByName(req.body.username);
		if (!validateUser) {
			res.json("available");
		}
		if (validateUser) {
			res.json("unavailable");
		}
	} catch (error) {
		console.log(error);
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

router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) res.status(500).json(err);
		if (!user) res.json("Invalid username or password!");
		else {
			req.login(user, (err) => {
				if (err) res.status(500).json(err);

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
});

// for persisting req.user on the front end.
router.post("/current", (req, res) => {
	try {
		if (!req.user) {
			res.send("No one is currently logged in");
		} else {
			const { user_id, email, username, first_name, last_name, created_at, is_active } =
				req.user;
			res.json({ user_id, email, username, first_name, last_name, created_at, is_active });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//***********************************experimental*****************************
// router.get("/votes/:id", async (req, res) => {
// 	const userId = req.params.id;

// 	try {
// 		const votes = await User.getUserVotes(userId);
// 		res.json(votes);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
//***********************************experimental*****************************

module.exports = router;
