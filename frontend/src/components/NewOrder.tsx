import DropDown from "../ui/DropDown";
import Layout from "../ui/Layout";


export default function NewOrder() {
  return (
    <Layout>

                <div className="bg-slate-50  p-5 ">
                            <div className="bg-blue-500 w-max px-7 py-1 rounded-sm relative left-[-35px] ">
                                   <h1 className="lg:text-xl font-semibold text-slate-50">Register New Order</h1>
                            </div>
                            <form className="p-5 flex flex-col gap-4 "  >
                                
                                        <label htmlFor="">Customer Name: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="text" placeholder="Type customer name " />
                                 
                                        <label htmlFor="">Order Name: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="text" placeholder="Type order name " />
                                 <div className="flex gap-4">
                                        <label className="self-center" htmlFor="">Order Type: </label>
                                        <DropDown />
                                 </div>
                                        <label htmlFor="">Quantity: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="quanity" />
                               
                                      <label htmlFor="">Phone:</label>
                                      <div className='flex gap-1'>
                                      <p className="self-center"> +91- </p> <input className="p-2 grow focus:outline-none border rounded-sm" type="text" maxLength={10}  />
                                      </div>
                                      <label htmlFor="">Delivery Date:</label>
                                      <input className="p-2 focus:outline-none border rounded-sm" type="date"  />
                                 
                                  
                                        <label htmlFor="">Advance Amount: </label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="advance" />
                                    
                                        <label htmlFor="">Total Amount:</label>
                                        <input className="p-2 focus:outline-none border rounded-sm" type="number" placeholder="total" />
                                 
                                        
                                 <button className="bg-blue-500 py-3 text-slate-50 font-medium rounded-sm hover:bg-blue-400">Submit Order</button>   
                            </form>
                </div>
    </Layout>
  )
}
