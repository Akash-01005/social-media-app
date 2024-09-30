import express from "express";

const routes = express.Router()

routes.post('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({message:"cookie earsed"})
})

export {routes as logoutRoutes}