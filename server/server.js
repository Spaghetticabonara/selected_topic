const express = require('express')
const app = express()
require('dotenv').config()
const mongooseConnection = require("./src/mongoose/mongoose.connect")
const TestRoute = require("./src/route/test.route")
const CategoryRoute = require("./src/route/category.route")
const ProductRoute = require("./src/route/product.route")
const ParkingRoute = require("./src/route/parking.route")

// connect mongoose
mongooseConnection()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// route
app.use('/tests', TestRoute)
app.use('/categories', CategoryRoute)
app.use('/products', ProductRoute)
app.use('/parking', ParkingRoute)

app.listen(process.env.PORT, () => {
    console.log('server running on port ', process.env.PORT)
})