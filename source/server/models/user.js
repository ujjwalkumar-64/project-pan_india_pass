const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/panindiapass' );

connect.then(()=>{
    console.log("Database connected successfully")
})
.catch(()=>{
    console.log("Database cannot be connected")
})
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }  
    
     
     
})

const collection=new mongoose.model("user",userSchema)
module.exports=collection;