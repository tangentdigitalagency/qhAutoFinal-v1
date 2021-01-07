const mongoose = require('mongoose')

const Car = new mongoose.Schema({
    model_id: String,
    model_make_id: String,
    model_name: String,
    model_trim: String,
    model_year: String
})

const car = mongoose.model('car', Car)

module.exports = car