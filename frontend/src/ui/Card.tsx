import { useState } from "react"
import IconEye from "./IconEye"
import IconEyeOff from "./IconEyeOff"

export default function Card({title, icon,value,isEarning}:{title:string,icon:React.ReactNode,value:string,isEarning?:boolean,}){
    const [show,setShow]  = useState(false)
      const showHandler = () =>{
        setShow(!show)
      }
      return <div className={`bg-gradient-to-r from-blue-500 via-blue-400 to-blue-400 backdrop-saturate-50 lg:p-8 p-4 rounded-md text-slate-200 font-medium text-lg grid grid-rows-3 gap-5`}>
                    <div className="flex justify-between">
                        <p>
                        {title}
                        </p>
                        {icon}
    
                    </div>
                    <p>
                        {isEarning?show?value:"₹ ****.0":value
                        }
                    </p>
                    <div onClick={showHandler} className={`${isEarning?"visible":"invisible"}`}>
                        { show ?  <IconEye />:<IconEyeOff/>}
                    
                    </div>
            </div>
    }
    