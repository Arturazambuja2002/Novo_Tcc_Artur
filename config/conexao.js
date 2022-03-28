const mongoose = require('mongoose')
const uri = "mongodb+srv://Artur_Azambuja:gremioimortal1903@capitalcash.5kvir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose