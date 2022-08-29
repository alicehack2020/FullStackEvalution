import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => 
{
  
 const [data,setData]=useState([])
 const navigate=useNavigate()
  

 useEffect(()=>{
  loadData()
},[])

const loadData=()=>{
  fetch('http://localhost:3000/getNotes')
  .then(response => response.json())
  .then(data => setData(data)); 
}
  
const addNote=()=>{
   navigate("/addpage")
}
const updateNote=()=>{
  navigate("/UpdatePage")
}



const deleteNote=(i)=>{
  console.log("id"+i);  
  const id={
    "_id":i}
fetch('http://localhost:3000/noteDelete', {
  method: 'DELETE', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(id),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  alert("deleted sucessfully")
  loadData()
})
.catch((error) => {
  console.error('Error:', error.message);
  
});


}
  return (
    <>
    <button onClick={addNote}>Add</button>
 <div>
      {
        data.map((e)=>{
          return(<>
            <h1>{e.taskname}</h1>
            <p>{e.status}</p>
            <p>{e.tag}</p>
            <button onClick={()=>deleteNote(e._id)}>delete</button>
            <button onClick={updateNote}>update</button>
          </>)
        })
      }
    </div>
    </>
   
  )
}

export default Home