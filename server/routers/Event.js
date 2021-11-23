const router=require("express").Router()
const Event=require("../models/Event")
const checkAuth=require("../middleware/check-auth")
const fileUpload=require("../middleware/file-upload")

router.get("/getEvents",async (req,res)=>{
    const eventModel=await Event.find({})
    res.json(eventModel)
})

router.get("/getEvents/:id",async(req,res)=>{
    const id = req.params.id
    const event=await Event.find({_id:id})
    res.json(event)
})

// router.use(checkAuth)
router.post("/postEvents",fileUpload.single('eventImage'),async (req,res)=>{
    const eventImage=req.file.path
    const {name,date,time,description,source} = req.body
    const newEvent=new Event({
        name,time,date,description,eventImage,source
    })
    newEvent.date=Date(date)
    await newEvent.save()
    res.json(newEvent)
})
module.exports=router