const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit:'50mb', extended: true}))

require('./routes/addzip')(app)
require('./routes/addCars')(app)
require('./routes/getYears')(app)
require('./routes/getMake')(app)
require('./routes/getModel')(app)
require('./routes/getZip')(app)
require('./routes/returnZip')(app)

let db = ''

if (process.env.NODE_ENV === "production") {
    db = process.env.MongoURI
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
else {
    // db = 'mongodb://localhost:27017/autoForm'
    // db = 'mongodb+srv://admin_test:admin_test@cluster0.pcuq8.mongodb.net/autoform?retryWrites=true&w=majority'
    db = 'mongodb+srv://admin:portal456@cluster0.corah.mongodb.net/autoForm?retryWrites=true&w=majority'
}

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})