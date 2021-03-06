const { green, red } = require("chalk");
const  db  = require("./backend/db/database");
const User = require('./backend/Model/userModel');
const Bug = require("./backend/Model/bugModel")

const users = [{
  name: "joe john",
  password: "123456"
}];

const bugs = [{
  name: "crash on load",
  details: "crashes after 3 seconds",
  steps: "Load site",
  priority: 1,
  creator: "Keisha Rosenblatt",
  time: "13:30"
}]


const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
   const createdUser = await Promise.all(users.map(user => {
      return User.create(user)
  }));
  const createdBug = await Promise.all(bugs.map(bug => {
    return Bug.create(bug)
}));



  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}