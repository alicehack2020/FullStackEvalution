const mongoose=require("mongoose")

const register=new mongoose.Schema({
    UserName:{type:String},
    Email:{type:String},
    Password:{type:String},
    Age:{type:Number}
})
const RegisterModel=mongoose.model("users",register)
module.exports=RegisterModel;