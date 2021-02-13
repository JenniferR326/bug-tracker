//bug model info
const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db/database')

const Bug = db.define('bug', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  details: {
    type: Sequelize.STRING
  },
  steps: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.INTEGER
  },
  creator: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.TIME
  }
})


module.exports = Bug
