const user=require("express").Router()
const AuthControllers=require("../controllers/AuthControllers")

//login
user.post("/login",AuthControllers.login)   
 
//register
user.post("/register",AuthControllers.register)

module.exports=user;
