const zipCode = require('../models/ZipCode')

module.exports = (app) => {
    app.post('/addzip',  (req, res) => {

        zipCode.create(req.body)

        res.send('got it')
    })
}