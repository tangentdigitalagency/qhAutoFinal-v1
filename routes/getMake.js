const car = require('../models/Car')

module.exports = (app) => {
    app.post('/getmake', (req, res) => {
        let makeYear = req.body.year
        // console.log(req.body)
        car.find({model_year: makeYear}, (err, data) => {
            if (err) throw err

            let getMake = data.map(({model_make_id}) => model_make_id)
            let makeSet = new Set(getMake)
            let make = [...makeSet]
            make.sort()

            res.send(make)
        })
    })
}