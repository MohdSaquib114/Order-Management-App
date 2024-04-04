import {  NavLink, useLocation } from "react-router-dom";


export default function SidebarLink({path,title,icon}:{path:string,title:string,icon:React.ReactNode}) {

  return (
    <NavLink  style={({ isActive,  isTransitioning }) => {
        return {
          
          backgroundColor:isActive?"#3b82f6":"",
          color:isActive?"white":"",
          viewTransitionName: isTransitioning ? "slide" : "",
        };
      }}  className='flex justify-between p-3 hover:border-1 rounded-md hover:bg-violet-50 '   to={path}>
      {title}
      {icon}
    </NavLink>
  )
}
