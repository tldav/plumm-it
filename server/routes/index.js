// Routes Index
const express = require("express");
const router = express.Router();
const userRoutes = require("./users");
const threadRoutes = require("./threads");
const commentRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/threads", threadRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
