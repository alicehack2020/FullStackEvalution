const note=require("express").Router()
const NoteControllers=require("../controllers/NoteControllers")

note.post("/addNotes",NoteControllers.addNotes)
note.get("/getNotes",NoteControllers.getNotes)   
note.delete("/noteDelete",NoteControllers.noteDelete)   
module.exports=note;
