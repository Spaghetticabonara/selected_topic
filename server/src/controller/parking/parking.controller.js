const ParkingService = require('../../service/parking.service')

exports.CreateParking = async (req, res) => {
    const parking = await ParkingService.CreateParking(req)
    return res.status(200).json({ data: parking })
}

exports.ShowParking = async (req, res) => {
    const parking = await ParkingService.ShowParking(req)
    return res.status(200).json({ data: parking })
}

exports.SearchParking = async (req, res) => {
    const parking = await ParkingService.SearchParking(req)
    return res.status(200).json({ data: parking })
}

exports.getParkingById = async (req, res) => {
    const parking = await ParkingService.getParkingById(req)
    return res.status(200).json({ data: parking })
}