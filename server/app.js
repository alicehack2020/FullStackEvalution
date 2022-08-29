const express=require("express")
const app=express()
const user=require("./Routes/userRoutes")
const note=require("./Routes/notesRoutes")
const connectDB=require("./db/connction.js")
var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(user)
app.use(note)

app.listen(3000,()=>{
// connectDB("mongodb://localhost:27017/welcome2022")
connectDB("mongodb+srv://demo:demo@cluster0.zle8g.mongodb.net/?retryWrites=true&w=majority")
    console.log("SERVER IS RUNNING")
})