
import HomeIcon from "../ui/HomeIcon";
import OrderIcon from "../ui/OrderIcon";
import SidebarLink from "../ui/SidebarLink";
import PendingIcon from "../ui/PendingIcon";
import { useRecoilValue } from "recoil";
import { sideBarState } from "../store/atom";


const sidebarBtnData = [
    {path:"/", title:"Dashboard",icon:<HomeIcon/>},
    {path:"new-order", title:"New Order",icon:<OrderIcon/>},
    {path:"pending-list", title:"Pending Orders",icon:<PendingIcon/>},
    {path:"completed-list", title:"Completed Orders",icon:<PendingIcon/>}
]

export default function Sidebar() {
    const sideBar =useRecoilValue(sideBarState)
    const position = sideBar ? "left-0" : "left-[-200px]"
  return (
    <div className={`z-50 lg:relative absolute lg:left-0 transition-all ease-in-out top-[62px] lg:top-0 ${position} bg-slate-50 border-r-2 pt-14   flex-col flex   p-5 gap-6 h-screen  text-sm font-medium text-blue-500`}>
      {sidebarBtnData.map(btnData=>
             <SidebarLink 
             key={btnData.path+btnData.title}
             path={btnData.path} 
             title={btnData.title} 
             icon={ btnData.icon}/>
             )
             }
    </div>
  )
}
