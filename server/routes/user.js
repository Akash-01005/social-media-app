import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import UserModel from "../models/user.js";

const routes = express.Router()

routes.post('/signup',async(req,res)=>{
    const {username,email,password} = req.body;
    const check = await UserModel.findOne({email:email});
    console.log(check)
    if(check === null){
        const hashpass = await bcrypt.hash(password,10);
        const data = {username:username,email:email,password:hashpass,image:"none.png"}
        await UserModel.create(data)
        return res.json({status:true,message:"user created"})
    }
    return res.json({status:false,message:"user already exists"})
})

export {routes as userRoutes}