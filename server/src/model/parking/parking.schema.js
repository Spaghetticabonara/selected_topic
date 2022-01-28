const mongoose = require('mongoose')

const ParkingSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    description: { type: String },
    distance: { type: Number },
    available: { type: Number },
    lat: { type: Number },
    lng: { type: Number },
    photo: { type: String },
    share_by: { type: String },
    share_photo: { type: String },
    share_phone: { type: String },
    share_date: { type: String },
}, { timestamps: true})

module.exports = mongoose.model('Parking', ParkingSchema)