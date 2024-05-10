import { Request, Response, Router } from "express";
import { PrismaClient } from '@prisma/client'
import { orderSchemaValidator, pageParamValidator, uuidValidator } from "../middleware/order";


const prisma = new PrismaClient()

const route = Router()

route.post("/", orderSchemaValidator ,async (req:Request,res:Response)=>{
    try{

        const orderData = req.body
      
        const result = await prisma.order.create({
            data:orderData
        })
        
        res.status(200).json({success:true,message:"Successfull posted order"})
    }catch(e){
        res.status(400).json({error:e})
    }
})

route.put("/completed",uuidValidator,async (req:Request,res:Response)=>{
 try { 
    const {id} = req.body
    const result = await prisma.order.update({
    where:{
        id:id
    },
    data:{
         completed:true
    }
    })

    res.status(200).json({
    success:true,
    message:"updated order"
    })
 }catch(e){
    
    res.status(400).json({error:e})
}
})

route.get("/count", async (req:Request,res:Response) => {
    const totlaOrders = await prisma.order.count()
    res.json(totlaOrders)
})

route.get("/page/:pageNumber",pageParamValidator,async (req:Request,res:Response) =>{
res.json("fsdf")
} )
export default route