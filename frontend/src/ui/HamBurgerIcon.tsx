import { useRecoilState } from "recoil"
import { sideBarState } from "../store/atom"

export default function HamBurgerIcon() {
const [sideBar,setSideBar] =     useRecoilState(sideBarState)
const handler = () => {
 
    setSideBar(!sideBar)
}

  return (
    <div onClick={handler} className='lg:p-2  p-3 flex bg-blue-100 rounded-md visible lg:invisible'>
        
  
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-5 w-3  text-blue-600  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
)
}
