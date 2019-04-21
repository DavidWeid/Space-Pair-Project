// Here we need to create our references to our routes.
// Make routes in this API directory, same level as this index.js
// New routes will be route.js and difRoute.js

const router = require("express").Router();
const someRoute = require("./route");
const someOtherRoute = require("./difRoute");
const postsRoute = require("./postRoute")

// Some Routes
// When user goes to "/api/route", use the routes defined in someRoute.js
router.use("/route", someRoute);

// A Different Route
// When user goes to "/api/difRoute", use the routes defined in someOtherRoute.js
router.use("/difRoute", someOtherRoute);

router.use("/posts", postsRoute)

module.exports = router;
