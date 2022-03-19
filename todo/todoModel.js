const mongoose = require("./connectDB");


const todoSchema = mongoose.Schema({
    status : String,
    name : String,
    deadline : Date
},{collection :'todo'})

const todoModel = mongoose.model('todo', todoSchema )


module.exports = todoModel


todoModel.create({
    status : 'téttt',
    name : 'MANH',
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})