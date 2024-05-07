import { useNavigate } from "react-router-dom";
import DropDown from "../ui/DropDown";
import Layout from "../ui/Layout";
import { useSetRecoilState } from "recoil";
import { currentOrderState } from "../store/atom";

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";

type orderType = {
       customerName:string,
       orderName:string,
       orderType:string,
       quantity:string,
       phone:string,
       deliveryDate:string,
       advance:string,
       total:string,
       
}
export default function NewOrder() {
       const [type,setType] = useState("Select Type")
       const setCurrentOrder = useSetRecoilState(currentOrderState)
       const navigate = useNavigate()
       const {
              register,
              handleSubmit,
          
              formState: { errors },
            } =    useForm<orderType>()
            
  const onSubmit: SubmitHandler<orderType> = (data) =>{ 
       data.orderType = type
       console.log(data)
       setCurrentOrder(data)
       navigate("/order-bill")
       }
       console.log(type)

  return (
    <Layout>

                <div className="bg-slate-50  p-5 ">
                            <div className="bg-blue-500 w-max px-7 py-1 rounded-sm relative left-[-35px] ">
                                   <h1 className="lg:text-xl font-semibold text-slate-50">Register New Order</h1>
                            </div>
                            <form className="p-5 flex flex-col gap-4 "   onSubmit={handleSubmit(onSubmit)} >
                                
                                        <label htmlFor="">Customer Name: </label>
                                        <input  className="p-2 focus:outline-none border rounded-sm" type="text" placeholder="Type customer name " {...register("customerName",{required:true})} />
                                        {errors.customerName && <span className="text-red-400" >This field is required</span>}

                                 
                                        <label htmlFor="">Order Name: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="text" placeholder="Type order name " {...register("orderName",{required:true})}/>
                                        {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                 <div className="flex gap-4">
                                        <label className="self-center" htmlFor="">Order Type: </label>
                                        <DropDown type={type} setType={setType} />
                                 </div>
                                        <label htmlFor="">Quantity: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="quanity"  {...register("quantity",{required:true})}/>
                                        {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                      <label htmlFor="">Phone:</label>
                                      <div className='flex gap-1'>
                                      <p className="self-center"> +91- </p> <input  className="p-2 grow focus:outline-none border rounded-sm" type="text" maxLength={10}  {...register("phone",{required:true})} />
                                      </div>
                                      {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                      <label htmlFor="">Delivery Date:</label>
                                      <input  className="p-2 focus:outline-none border rounded-sm" type="date" {...register("deliveryDate",{required:true})}  />   
                                      {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                  
                                        <label htmlFor="">Advance Amount: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="advance"  {...register("advance",{required:true})}/>
                                        {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                        <label htmlFor="">Total Amount:</label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="total" {...register("total",{required:true})} />
                                        {errors.customerName && <span className="text-red-400" >This field is required</span>}
                                        
                                 <input type="submit"    className="bg-blue-500 py-3 text-slate-50 font-medium rounded-sm hover:bg-blue-400 text-center"/> 
                            </form>
                </div>
    </Layout>
  )
}
