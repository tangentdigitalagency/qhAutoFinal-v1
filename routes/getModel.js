const car = require('../models/Car')

module.exports = (app) => {
    app.post('/getmodel', (req, res) => {
        let year = req.body.year
        let make = req.body.make

        car.find({model_year: year, model_make_id: make}, (err, data) => {
            if (err) throw err

            let getModel = data.map(({model_name}) => model_name)
            let setModel = new Set(getModel)
            let model = [...setModel]
            model.sort()

            res.send(model)
        })
    })
}
