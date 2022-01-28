const express = require('express')
const router = express.Router()
const ParkingController = require('../controller/parking/parking.controller')

router.get('/', ParkingController.ShowParking)
router.get('/search/:name', ParkingController.SearchParking)
router.get('/get/:id', ParkingController.getParkingById)
router.post('/add', ParkingController.CreateParking)

module.exports = router