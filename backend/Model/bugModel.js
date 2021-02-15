//bug model info
const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db/database')

const Bug = db.define('bug', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  details: {
    type: Sequelize.STRING,
    allowNull: false
  },
  steps: {
    type: Sequelize.STRING,
    allowNull: false
  },
  priority: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
 
})


module.exports = Bug
