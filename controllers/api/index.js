const router = require("express").Router();
const usersRoutes = require("./user-routes");
const postRoutes = require("./post-routes")

router.use("/users", usersRoutes);
router.use("/posts", postRoutes)


module.exports = router;
