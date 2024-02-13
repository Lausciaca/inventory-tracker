'use strict'

require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI)
    .then(console.log('Conexion exitosa'))
    .catch(err => console.log(err))

