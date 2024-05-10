import { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"
import { userBodyValidator } from "../middleware/user";
import jwt from "jsonwebtoken"
require("dotenv").config()
const prisma = new PrismaClient()
 
const jwtSecret = process.env.JWT_SECRET




const route = Router()

route.post("/login", userBodyValidator ,async (req:Request,res:Response)=>{
    try{ 
        const {email,password} = req.body

    const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if(!user){
        res.status(400).json({
            success:false,
            message:"User does not exist"
        })
    }
    const hashedPassword = user?.password
    const isEqual = await bcrypt.compare(password,hashedPassword as string)
    if(!isEqual){

        res.status(404).json({
            success:false,
            message:"credentials are wrong"
        })
        return
        
    }
     const token = jwt.sign({email:email},jwtSecret as string)
    

   res.status(200).cookie("authentication",token).json({
    success:true,
    message:"LoggedIn"
   })}catch(e){
        res.status(400).json({
          error:e  
        })
   }

}
)


route.post("/logout", async (req:Request,res:Response)=>{
    res.status(200).clearCookie("authentication").json({
        success:true,
        message:"Logged Out"
    })
})
export default route