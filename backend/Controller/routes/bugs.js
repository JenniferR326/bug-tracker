// bugs router

const router = require("express").Router();
const bugModel = require("../../Model/bugModel");

//create bug route
router.post("/createbug", async (req, res, next) => {
  try {
    const newBug = await bugModel.create(req.body);
    res.json(newBug);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const bugs = await bugModel.findAll();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const bugToEdit = await bugModel.findByPk(req.params.id);
    await bugToEdit.update(req.body);
    res.json(bugToEdit);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await bugModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allBugs = await bugModel.findAll();
    res.json(allBugs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
