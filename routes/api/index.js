const router = require("express").Router();
const postRoute = require("./postRoute");
const userRoute = require("./userRoute");
const commentRoute = require("./commentRoute");
const articleRoute = require("./articleRoute");

// When User goes to "/api/posts", use routes defined in postsRoute.js
router.use("/posts", postRoute);
router.use("/users", userRoute);
router.use("/comments", commentRoute);
router.use("/articles", articleRoute);

module.exports = router;
