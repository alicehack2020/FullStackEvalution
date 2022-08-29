const RegisterModel=require("../model/register.js")

class AuthControllers{
    static login=async(req,res)=>
    {
        const user=await RegisterModel.find({Email:req.body.Email})
        res.send(user)
    }

    static register=async (req,res)=>{
        const user=await RegisterModel.create({
                "UserName":req.body.UserName ,
                "Email":req.body.Email ,
                "Password": req.body.Password,
                "Age": req.body.Age
        })
        res.send(user)
    }

 
}

module.exports=AuthControllers;