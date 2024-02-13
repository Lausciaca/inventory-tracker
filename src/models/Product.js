'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
    name: {
        type: String,
    },
    stock: {
        type: Number,
    },
    purchase_date: {
        type: Date,
    },
    arrival_date: {
        type: Date,
    },
    purchase_price: {
        type: Number,
    },
    sale_price: {
        type: Number,
    },
    stockist: {
        type: String,
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// const Product = new mongoose.model('Product', ProductSchema)

module.exports = mongoose.model('Product', ProductSchema)