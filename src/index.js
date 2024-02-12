const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/web')
require('dotenv').config()

app.set('view engine', 'pug')
app.set('views', 'src/views')
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', routes)

async function init() {
    await app.listen(process.env.PORT)
    console.log('app running on port ' + process.env.PORT)
}
init()

module.exports = app