import zod from "zod"


export const orderSchema = zod.object({
    customerName:zod.string(),
    orderName: zod.string(),
    orderType:zod.string(),
    quantity:zod.number(),
    phone:zod.number(),
    deliveryDate:zod.date(),
    advanceAmount:zod.number(),
    totalAmount:zod.number()
})

export const uuidSchema = zod.string().uuid()