const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, "Invalid email format"]
    },
    password:{
        type:String,
        required:true
    }


})

const user = mongoose.model("users",userSchema);
module.exports = user;