const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/k20");

const userschema = mongoose.Schema({
    username: String,
    password: String
},{collection :'userr'})

const userModel = mongoose.model('userr', userschema )


module.exports = userModel


module.exports = userModel