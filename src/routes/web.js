const express = require('express');
const crearProducto = require('../controller/productCtrl');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('/')
    res.render('index')
})
router.post('/', (req, res) => {
    crearProducto(req.body)
    
    res.redirect('/') 
})

module.exports = router