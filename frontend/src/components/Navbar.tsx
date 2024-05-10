import { useState } from "react";
import BellIcon from "../ui/BellIcon.1";
import HamBurgerIcon from "../ui/HamBurgerIcon";
import LogoIcon from "../ui/LogoIcon";
const months:string[] = [ "January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December" ];
 
 const myDate:Date = new Date();

 const customizeDate =(months[myDate.getMonth()].slice(0,3)) + " " +  myDate.getDay() + ", "+ myDate.getFullYear().toString().slice(2,5)
const data = [
  {customerName:"dfdvd dsdsds", orderName:"card",deposit:500,finalPayment:1000,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"cfdj dsdsds", orderName:"card",deposit:400,finalPayment:1000,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"cdvd dfdvfvvsdsds", orderName:"card",deposit:800,finalPayment:2000,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"dfdvd dsdsdcvxcs", orderName:"card",deposit:1000,finalPayment:3000,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"dfdvxcdd dsdcxsds", orderName:"card",deposit:266,finalPayment:700,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"dfdvd dsdsds", orderName:"card",deposit:100,finalPayment:300,deadLine:customizeDate,deliveryDate:customizeDate},
  {customerName:"dfdvd dsdsds", orderName:"card",deposit:200,finalPayment:500,deadLine:customizeDate,deliveryDate:customizeDate}
  ]
  

export default function Navbar() {
  const [ notifyComp,setNotifyComp] = useState(false);

  return (
    <div className=" p-3 border-b-2 col-span-5  grid grid-cols-5">
        <div className="flex md:justify-around justify-between lg:col-end-2 col-end-3 col-span-3">
          <LogoIcon />
           <HamBurgerIcon />
        </div>
        <div className="col-start-5  flex lg:justify-around  justify-between">
            <div className="flex self-center" onClick={()=>setNotifyComp(!notifyComp)}>
              <BellIcon />
              
              <div className="lg:w-2 lg:h-2 w-1 h-1 bg-red-400 rounded-full "></div>
            </div>
            <div className={ `rounded-md border p-4 bg-slate-50 overflow-y-scroll h-60  z-50 absolute top-[60px] right-[140px] ${notifyComp?"visible":"invisible"}`} >
               <div className="flex gap-5 mb-2">
                <p>Order Name</p>
                <p>Due Date</p>
               </div>
               <ul className="flex flex-col gap-2 ">
               {data.map((order,id) => <li key={id+order.finalPayment}>
                   <div className="flex justify-between ">
                    <p>{order.orderName}</p>
                    <p>{order.deliveryDate}</p>
                   </div>
               </li>)}
               </ul>
            </div>
            <div className="rounded-full p-3 text-xs lg:text-md bg-slate-300 border border-blue-500">
                SM
            </div>
        </div>

    </div>
  )
}
