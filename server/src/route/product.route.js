const express = require('express')
const router = express.Router()
const ProductController = require('../controller/product/product.controller')

router.post('/', ProductController.CreateProduct)
router.get('/:category', ProductController.FindProductByCategory)

module.exports = router