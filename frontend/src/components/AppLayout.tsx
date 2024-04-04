import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


export default function AppLayout() {
  return (
    <div className="grid grid-cols-5 ">
      <Navbar  />
      <Sidebar />
      <Outlet />
    </div>
  )
}
