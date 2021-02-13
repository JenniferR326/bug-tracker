// require("dotenv").config();
const express = require("express");
const path = require("path")
const volleyball = require("volleyball")
const session = require("express-session")

const app = express()

const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({debug}))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "../public")))

app.use(session({
  secret: "temporary",
  resave: false,
  saveUninitialized: false
}))

app.use("/api", require("./api"))

app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "../public/index.html"))
})

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || "Internal server error")
})

app.listen(8080, ()=> {
  console.log("Listening on port 8080")
})

module.exports = app