import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import { userRoutes } from "./routes/user.js";
import { loginRoutes } from "./routes/login.js";
import { logoutRoutes } from "./routes/logout.js";
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(userRoutes)
app.use(loginRoutes)
app.use(logoutRoutes)

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("mongodb is connected....")
})
.catch(err=>console.log(err))

app.listen(process.env.PORT,()=>{
    console.log(`port ${process.env.PORT} is running`)
})


