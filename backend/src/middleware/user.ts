import { NextFunction, Request, Response } from "express";


export function userBodyValidator(req:Request,res:Response,next:NextFunction){
    const {email,password} = req.body
    if(email === "" || password === ""){
        res.status(400).json({
            error:{
                message:"email or password is not provided"
            }
        })
    } 
    next()
}
