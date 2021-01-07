const ZipCode = require('../models/ZipCode')

module.exports = (app) => {
    app.post ('/returnZip', (req, res) => {
        ZipCode.find({zip: req.body.zipCode}, (err, data) => {
            res.send(data[0])
        })
    })
}