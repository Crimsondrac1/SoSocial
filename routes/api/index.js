const router = require("express").Router();
const userRoute = require("./users-routes");
const thoughtRoute = require("./thoughts-routes");

router.use("/users", userRoute);
router.use("/thoughts", thoughtRoute);

module.exports = router;
