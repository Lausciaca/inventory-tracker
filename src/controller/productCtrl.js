const Product = require('../models/Product')

const crearProducto = (body) => {
    const { nombre,
        cantidad,
        fecha_compra,
        fecha_llegada,
        precio_compra,
        precio_venta,
        distribuidor } = body

    Product.create({
        name: nombre,
        stock: cantidad,
        purchase_date: fecha_compra,
        arrival_date: fecha_llegada,
        purchase_price: precio_compra,
        sale_price: precio_venta,
        stockist: distribuidor,
    })
}

module.exports = crearProducto