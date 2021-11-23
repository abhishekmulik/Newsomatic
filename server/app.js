const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const bodyParser=require("body-parser")
dotenv.config()

const app=express()
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions))
 app.use(bodyParser.json())
 app.use('/uploads/images',express.static("uploads/images"))   //to make images available public

 //connect to db
mongoose.connect(process.env.MDB_CONNECT,(err)=>{
    if (err) return console.error(err) 
    console.log("Connected to mongoDb")
})
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})

//setup routes
app.use("/events",require("./routers/Event"))
app.use("/auth",require("./routers/userRouter"))

