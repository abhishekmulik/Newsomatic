const mongoose=require('mongoose')

const eventSchema = new mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:String,required:true},
    description:{type:String,required:true},
    eventImage:{type:String},
    source:{type:String}
})  

const Event=mongoose.model("event",eventSchema)

module.exports=Event;