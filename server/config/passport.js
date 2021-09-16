// Passport Config
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models").User;

const verifyCallback = async (username, password, done) => {
	try {
		const user = await User.findByName(username);

		if (!user) return done(null, false, { message: "Invalid Username!" });

		const validPassword = await bcrypt.compare(password, user.user_password);

		if (!validPassword) return done(null, false, { message: "Invalid Password!" });

		return done(null, user);
	} catch (err) {
		done(err);
	}
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser(async (user, done) => {
	try {
		const dbUser = await User.findById(user.user_id);
		return done(null, dbUser);
	} catch (err) {
		done(err);
	}
});

module.exports = passport;
