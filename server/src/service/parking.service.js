const ParkingModel = require('../model/parking/parking.schema')

exports.CreateParking = async (req) => {
    const doc = new ParkingModel(req.body)
    return doc.save()
}

exports.ShowParking = async (req) => {
    const doc = await ParkingModel.find(req.body)
    return doc
}

exports.SearchParking = async (req) => {
    const doc = await ParkingModel.find({name: req.params.name})
    return doc
}

exports.getParkingById = async (req) => {
    const doc = await ParkingModel.find({ id: req.params.id })
    return doc
}