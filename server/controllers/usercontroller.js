import asyncHandler from "express-async-handler"
import UserModel from "../models/user.js";

const allUsers = asyncHandler(async(req,res)=>{
    const keyword = req.query.search ? {
        $or:[
            {
                name:{
                    $regex:req.query.search,
                    $option:'i'
                }
            },
            {
                email:{
                    $regex:req.query.search,
                    $option:'i'
                }
            }
        ]
    }:{};
    const users = await UserModel.find(keyword).find({__id:{$ne: req.user.__id}})
    res.send(users);
});

export default allUsers