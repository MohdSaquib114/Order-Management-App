import {  useSetRecoilState } from "recoil"
import { sideBarState } from "../store/atom"


export default function Layout({children}:{children:React.ReactNode}) {
    const setSideBar =     useSetRecoilState(sideBarState)
    const handler = () => {
     
        setSideBar(false)
    }
    
  return (
    <div onClick={handler} className={`lg:col-span-4  p-6 col-span-5 h-auto bg-slate-200`}>
      {children}
    </div>
  )
}
