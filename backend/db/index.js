const db = require('./database')
const userModel = require("../Model/userModel")
const bugModel = require("../Model/bugModel")

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//


module.exports = {
  // Include your models in this exports object as well!
  db,
  userModel,
  bugModel
}