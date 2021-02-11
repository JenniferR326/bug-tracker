const router = require("express").Router();
const userModel = require("../../Model/userModel");

router.post("/user", async (req, res, next) => {
  try {
    await userModel.create(req.body);
    if (!user) {
      res.status(400);
    } else {
      res.json("User created");
    }
  } catch (err) {
    next(err);
  }
});
router.put("/user", async (req, res, next) => {
  try {
    const { _id, name, password, role } = req.body;
    await userModel.findByIdAndUpdate(_id);
    if (!user) {
      res.status(400).send("no user");
    } else {
      res.json("updated");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await userModel.findOne(req.body);
    if (!user) {
      res.status(400).send("incorrect email/password");
    } else {
      res.cookie("user", user);
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    await userModel.find();
    if (!user) {
      res.status(400).send("no user");
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
