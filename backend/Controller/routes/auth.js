const router = require("express").Router();
const userModel = require("../../Model/userModel");

//create user route
router.post("/user", async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userToUpdate = await userModel.findByPk(req.params.id);
    await userToUpdate.update(req.body);
    res.json(userToUpdate);
  } catch (error) {
    next(error);
  }
});

//login route
router.post("/login", async (req, res, next) => {
  try {
    const user = await userModel.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (!user) {
      res.status(400).send("incorrect name");
    } else if (!user.correctPassword(req.body.password)) {
      res.status(400).send("Incorrect password");
    } else {
      req.session.user = user.dataValues
      res.send(user)
      // req.login(user, (err)=> {
      //   if (err) return next(err)
      //   else return res.send(user)
      // });
    }
  } catch (error) {
    next(error);
  }
});

//get loggedin user route
router.get("/me", async (req, res, next) => {
  try {
    res.send(req.session.user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
