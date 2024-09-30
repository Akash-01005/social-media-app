import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const routes = express.Router();

routes.post("/login",async(req,res)=>{
     const {email,password} = req.body;
     const user = await UserModel.findOne({email:email});
     if(user != null){
        const decrypt = await bcrypt.compare(password,user.password);
        const token = jwt.sign({email:user.email},process.env.JWT,{expiresIn: '1h'})
        console.log(token)
        res.cookie("token",token,{maxAge:360000,httpOnly:true})
        if(decrypt != true){
            return res.json({status:false,message:"Incorrect Password"});
        }
        return res.json({status:true,message:"login successfull"})
     }
     return res.json({status:false,message:"user does not exists"})
});

export {routes as loginRoutes}