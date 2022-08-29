import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const UpdatePage = () => {
    const [taskname,setTaskname]=useState("")
    const [status,setStatus]=useState("")
    const [tag,setTag]=useState("")
  
    const navigate=useNavigate()


    const submit=()=>{
        let noteData={
            "taskname":taskname,
            "status":status,
            "tag":tag
        } 

fetch('http://localhost:3000/noteUpdate', {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    alert("data updates sucsessfully")
    navigate("/")
    
  })
  .catch((error) => {
    console.error('Error:', error.message);
     
  });


  
}

function handleChangeStatus(event){
  setStatus(event.target.value)
}


function handleChangeTag(event){
  setTag(event.target.value)
}

  return (
    <div>
        <input type="text" name="" id="" value={taskname} onChange={(e)=>setTaskname(e.target.value)} placeholder="Enter Your Notes"/>
        
        <select name='option' onChange={handleChangeStatus}>
          <option value="pending">pending</option>
          <option value="done">done</option>
        </select>

        
        <select name='option' onChange={handleChangeTag}>
          <option value="personal">personal</option>
          <option value="official">official</option>
          <option value="family">family</option>
        </select>

        <button onClick={submit}>sumit</button>
    </div>
  )
}

export default UpdatePage