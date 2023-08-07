const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String
})

const userModel = mongoose.model('model',userSchema)

module.exports=userModel;


