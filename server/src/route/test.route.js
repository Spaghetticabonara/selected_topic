const express = require('express')
const router = express.Router()
const TestController = require('../controller/test/test.controller')

router.post('/', TestController.CreateTest)
router.get('/:name', TestController.FindTest)

module.exports = router