import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from "../context/AuthContext"
const Login = () => {
 
  const [userEmail,SetUserEmail]=useState("")
  const [userPassword,SetUserPassword]=useState("")

  let navigate = useNavigate();
 const {userLogin}=useContext(AuthContext)

  const magic=()=>{
    let userData={
      "UserName":userEmail,
      "Password":userPassword
    }

    fetch('http://localhost:3000/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log('Success:', data);
       alert("Login Sucessfully")
      loginMessage()
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
  }


  const loginMessage=()=>{
    navigate("/");
    userLogin()
  }

  return (
    <div>
    <input type="text" placeholder='Enter your Email' value={userEmail} onChange={(e)=>SetUserEmail(e.target.value)}/>
    <input type="text" placeholder='Enter your Password' value={userPassword} onChange={(e)=>SetUserPassword(e.target.value)}/>
    <button onClick={magic}>login</button>
    </div>
  )
}

export default Login