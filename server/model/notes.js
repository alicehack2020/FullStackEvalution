const mongoose=require("mongoose")

const notes=new mongoose.Schema({
    taskname:{type:String},
    status:{type:String},
    tag:{type:String}
})
const NoteModel=mongoose.model("notes",notes)
module.exports=NoteModel;