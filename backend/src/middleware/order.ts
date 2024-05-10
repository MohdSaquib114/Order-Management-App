import { NextFunction, Request, Response } from "express";
import { orderSchema, uuidSchema } from "../Schema/ZodSchema";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export async function orderSchemaValidator(req:Request,res:Response,next:NextFunction){
    try{

        const orderData = req.body
        const deliveryDate = new Date(orderData?.deliveryDate)
  orderData.deliveryDate = deliveryDate  
  const {success,error} = orderSchema.safeParse(orderData)
  if(!success){
      
    res.status(400).json({
       error:error
    })
    return
  }
    next()
}catch(e){
    res.status(400).json({
        error:"something went wrong"
    })
}
}

export function uuidValidator(req:Request,res:Response,next:NextFunction){
    try{

        const {id}  =  req.body
        
        const {success, error} = uuidSchema.safeParse(id)
        if(!success){
        res.status(400).json({
            error:error
         })
         return
    }
    next()
}catch(e){
    res.status(400).json({
        error:"something went wrong"
    })
}
}

export async function pageParamValidator(req:Request,res:Response,next:NextFunction){
    try{

        const {pageNumber}  =  req.params
        const ordersCount = await prisma.order.count()

        const  totalPages = Math.ceil(ordersCount / 10 )
    //    if(pageNumber > pagesCount){

    //    }
        // console.log(pagesCount)
    //     const {success, error} = .safeParse(pageNumber)
    //     if(!success){
    //     res.status(400).json({
    //         error:error
    //      })
    //      return
    // }
    next()
}catch(e){
    res.status(400).json({
        error:"something went wrong"
    })
}
}