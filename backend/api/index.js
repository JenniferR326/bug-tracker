const router = require("express").Router();


router.use("/users", require("../Controller/routes/auth"))
// router.use("/bugs", require("../Controller/routes/bugs"))


router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;