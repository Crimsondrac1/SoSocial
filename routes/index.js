const router = require("express").Router();
// const userRoute = require("./api/users-routes");
// const thoughtRoute = require("./api/thoughts-routes");
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use("/users", userRoute);
// router.use("/thoughts", thoughtRoute);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });

module.exports = router;
