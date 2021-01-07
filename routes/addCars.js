const car = require('../models/Car')

module.exports = (app) => {
    app.post('/addcars', (req, res) => {
        car.create(req.body)
        res.send('received')
    })
}