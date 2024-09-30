import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

const verify = asyncHandler(async(req,res,next)=>{
    const token = res.cookie.token;
    if(token){
        const decoded = 
    }
})