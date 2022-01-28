const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String }
}, { _id: false })

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    category: { type: CategorySchema },
    price: { type: Number },
    qty: { type: Number }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)