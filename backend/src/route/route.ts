import {Router} from "express"
import userRoute from "./user"
import orderRoute from "./order"

const route = Router()
route.use("/order/",orderRoute)
route.use("/user/",userRoute)

export default route