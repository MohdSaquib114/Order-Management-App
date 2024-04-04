import BellIcon from "../ui/BellIcon";
import HamBurgerIcon from "../ui/HamBurgerIcon";
import LogoIcon from "../ui/LogoIcon";

export default function Navbar() {
  return (
    <div className=" p-3 border-b-2 col-span-5  grid grid-cols-5">
        <div className="flex md:justify-around justify-between lg:col-end-2 col-end-3 col-span-3">
          <LogoIcon />
           <HamBurgerIcon />
        </div>
        <div className="col-start-5  flex lg:justify-around  justify-between">
            <div className="flex self-center">
              <BellIcon />
              
              <div className="lg:w-2 lg:h-2 w-1 h-1 bg-red-400 rounded-full "></div>
            </div>
            <div className="rounded-full p-2 text-xs lg:text-md bg-slate-300 lg:p-2 border border-blue-500">
                SM
            </div>
        </div>

    </div>
  )
}
