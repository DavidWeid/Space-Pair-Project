const router = require("express").Router();
const postsRoute = require("./postRoute");
const usersRoute = require("./userRoute");

// When User goes to "/api/posts", use routes defined in postsRoute.js
router.use("/posts", postsRoute);
router.use("/users", usersRoute);

module.exports = router;
