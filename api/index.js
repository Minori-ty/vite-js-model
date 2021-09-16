const express = require('express')
const app = express()
app.use(express.static(__dirname + '/dist'))
module.exports = app
