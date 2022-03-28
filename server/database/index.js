const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bancotccartur')
mongoose.Promise = global.Promise;

module.exports = mongoose;