const mongoose = require('mongoose')

const zipCodeSchema = new mongoose.Schema({
    zip: String,
    city: String,
    state_id: String,
    state_name: String
})

const zipcode = mongoose.model('zipcode', zipCodeSchema)

module.exports = zipcode