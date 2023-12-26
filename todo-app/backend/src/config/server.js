const port = 3001

const bodyParser = require('body-parser')
const allowCors = require('./cors')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(allowCors)

app.listen(port, () => {
    console.log(`Backend is running at port ${port}`)
})

module.exports = app