const express = require('express')
const app = express()
app.use(express.static(__dirname + '/dist'))
app.listen(8888, () => {
    console.log('启动http://localhost:8888')
})
module.exports = app
