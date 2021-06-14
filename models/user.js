const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {type : String, required : true}, 
    // lastName :  {type : String, required : true}, 
    email : String,
    // phone : Number,
    // age : Number
    
   
})

const User = mongoose.model('User',userSchema);

module.exports = User;