const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
        const tokenStr=req.headers.cookie  //Authorization: 
        const token=tokenStr.slice(6,tokenStr.length)
    if (!token){
        return res.status(200).send('Auth error')
    }
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET)
    req.userData={userId:decodedToken.user}
    next()
    }catch(err){
        return res.status(401).send('Auth error')
    }
}