const express = require('express');
const crearProducto = require('../controller/productCtrl');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('/')
    var color = 1
    const products = await Product.find()
    res.render('index', { products: products, color: color })
})
router.post('/entrada', (req, res) => {
    crearProducto(req.body)
    res.redirect('/') 
})

module.exports = router