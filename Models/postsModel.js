const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({

title:{
    type:String, required:true
},
content:{
    type:String,required:true
},
author:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users", required: true 
}




},{timestamps:true})

const blogPosts = mongoose.model("posts",postsSchema);
module.exports = blogPosts;