// Routes Index
const path = require("path");
const express = require("express");
const router = express.Router();
const userRoutes = require("./users");
const threadRoutes = require("./threads");
const commentRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/threads", threadRoutes);
router.use("/comments", commentRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
