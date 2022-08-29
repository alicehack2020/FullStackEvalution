const mongoose=require("mongoose")
const NoteModel=require("../model/notes")

class NoteControllers{

    static getNotes=async(req,res)=>
    {
        const note=await NoteModel.find()
        res.send(note)
    }

    static addNotes=async (req,res)=>
    {
        const note=await NoteModel.create({
                "taskname":req.body.taskname ,
                "status":req.body.status ,
                "tag":req.body.tag ,
                 
        })
        res.send(note)
    }

    static noteDelete=async(req,res)=>{
        const {_id}=req.body
        const id=_id
        const note=await NoteModel.deleteOne({"_id":id})
        res.send(note)
    }

    static update=async(req,res)=>{
        const {taskname}=req.body
        
        const note=await NoteModel.findOneAndUpdate({"taskname":taskname},req.body)
    }

 
}

module.exports=NoteControllers;