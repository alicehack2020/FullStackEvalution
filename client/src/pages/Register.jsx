import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [userName,SetUserName]=useState("")
  const [userEmail,SetUserEmail]=useState("")
  const [userAge,SetUserAge]=useState("")
  const [userPassword,SetUserPassword]=useState("")
  const navigate=useNavigate()

  const theregister=()=>{
   
    let userData={
      "UserName":userName,
      "Email":userEmail,
      "Password":userPassword,
      "Age":userAge
    }
 
 
 

fetch('http://localhost:3000/register', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  alert("registration  sucessfully")
  navigate("/login")
})
.catch((error) => {
  console.error('Error:', error.message);
  //alert(error)
});


}



  return (
    <div>
      <input type="text" placeholder='Enter User Name' value={userName} onChange={(e)=>SetUserName(e.target.value)}/>
      <input type="text" placeholder='Enter User Email' value={userEmail} onChange={(e)=>SetUserEmail(e.target.value)}/>
      <input type="text" placeholder='Enter User age' value={userAge} onChange={(e)=>SetUserAge(e.target.value)}/>
      <input type="text" placeholder='Enter User Password' value={userPassword} onChange={(e)=>SetUserPassword(e.target.value)}/>
      <button onClick={()=>theregister()}>Register</button>
    </div>
  )
}

export default Register