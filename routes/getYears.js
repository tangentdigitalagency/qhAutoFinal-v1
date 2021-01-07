const car = require('../models/Car')

module.exports = (app) => {
    app.get('/getyears', (req, res) => {
        car.find({}, (err, data) => {
            if (err) throw err

            let getYears = data.map(({model_year}) => model_year)
            let yearSet = new Set(getYears)
            let years = [...yearSet]
            years.sort()

            res.send(years)

            // console.log(years)
        })

    })
}