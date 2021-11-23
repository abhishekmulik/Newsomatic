const multer=require("multer")
const { v1: uuidv1 } = require('uuid');
const MINE_type_MAP={
    'image/png':'png',
    'image/jpeg':'jpeg',
    'image/jpg':'jpg',
    'image/webp':'webp'
}

const fileupload=multer({
    limit:500000,
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads/images')
        },
        filename:(req,file,cb)=>{
            const ext=MINE_type_MAP[file.mimetype]
            cb(null,uuidv1()+'.'+ext)
        },
        fileFilter:(req,file,cd)=>{
            const isValid=!!MIME_TYPE_MAP[file.mimetype]
            let error=isValid ? null : new Error("Invalid mime type")
            cb(null,isValid)
        }
    })
})

module.exports=fileupload