const mongoose = require("./connectDB");


const todoSchema = mongoose.Schema({
    status : String,
    name : String,
    deadline : Date
},{collection :'todo'})

const todoModel = mongoose.model('todo', todoSchema )


module.exports = todoModel


