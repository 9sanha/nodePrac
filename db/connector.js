const mongoose = require('mongoose')
const config = require(__dirname+'/mongo-url.json')
const conn = mongoose.connect(config.url);
module.exports = conn