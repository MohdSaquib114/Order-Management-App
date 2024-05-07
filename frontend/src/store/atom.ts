import { atom } from "recoil";

type orderType = {
    customerName:string,
    orderName:string,
    orderType:string,
    quantity:string,
    phone:string,
    deliveryDate:string,
    advance:string,
    total:string,
    orderState:string
}
 export const sideBarState  = atom({
    key:"sidebarstateatom",
    default:false
})

export const currentOrderState = atom<orderType>({
    key:"currentOrderatom",
    default:{
        customerName:"fgfbfgfb",
        orderName:"dfdnjd",
        orderType:"dfdkfdjk",
        quantity:"5",
        phone:"945226546",
        deliveryDate:"1-2-2006",
        advance:"455",
        total:"5522",
        orderState:'new'

    }
})