// Passport Config
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models").User;

const verifyCallback = async (username, password, done) => {
	console.log("***username argument from VERIFYCALLBACK", username);
	console.log("\n", "\n");
	try {
		const user = await User.findByName(username);
		console.log("***destructured user from verifyCallback", user);
		console.log("\n", "\n");

		if (!user) return done(null, false, { message: "Invalid Username!" });

		const validPassword = await bcrypt.compare(password, user[0][0].user_password);

		if (!validPassword) return done(null, false, { message: "Invalid Password!" });

		return done(null, user[0][0]);
	} catch (err) {
		done(err);
	}
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
	console.log("***user argument from SERIALIZE", user);
	console.log("\n", "\n");
	done(null, user);
});

passport.deserializeUser(async (user, done) => {
	console.log("***userId argument from DESERIALIZE: ", user);
	console.log("\n", "\n");
	try {
		const dbUser = await User.findById(user.user_id);
		console.log("dbUser from DESERIALIZE", dbUser);
		return done(null, dbUser[0][0]);
	} catch (err) {
		done(err);
	}
});

module.exports = passport;
