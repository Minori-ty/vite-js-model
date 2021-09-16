const express = require('express')
const app = express()
app.use(express.static('../dist'))
module.exports = app
