import { Dispatch, SetStateAction, useState } from "react"
import DropIcon from "./DropIcon"

const types = ["Invitation Card","Books","Flex","Visiting Cards","4 Color Job","Other"]

export default function DropDown({type,setType}:{type:string,setType:Dispatch<SetStateAction<string>>}) {
  
    const [drop,SetDrop ] = useState(true)
  return (
    <div  className="text-center  ">
        <div  onClick={()=>SetDrop(!drop)} className=" flex justify-around cursor-pointer   bg-blue-500 text-slate-50 font-medium w-[185px] rounded-sm mb-1 py-1 ">
          {type}
          <DropIcon/>
        </div>
      <div className={`${drop?"invisible  ":"visible"} bg-slate-50 absolute  border font-normal transition-all flex flex-col    rounded-sm`}>
       {types.map((type,id)=>
        
        <p  onClick={()=>{setType(type); SetDrop(true) }} className=" px-10 py-3 cursor-pointer hover:bg-slate-100 " key={type+id}>{type}</p>
      
       )}
      </div>
    </div>
  )
}
