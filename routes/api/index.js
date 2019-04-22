const router = require("express").Router();
const postsRoute = require("./postRoute");

// When User goes to "/api/posts", use routes defined in postsRoute.js
router.use("/posts", postsRoute);

module.exports = router;
