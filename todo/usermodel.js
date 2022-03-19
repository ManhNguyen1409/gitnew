const mongoose = require("./connectDB");



const userschema = mongoose.Schema({
    username: String,
    password: String
},{collection :'userr'})

const userModel = mongoose.model('userr', userschema )


module.exports = userModel


module.exports = userModel