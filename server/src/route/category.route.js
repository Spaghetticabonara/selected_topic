const express = require('express')
const router = express.Router()
const CategoryController = require('../controller/category/category.controller')

router.post('/', CategoryController.CreateCategory)

module.exports = router