import Cart from "../ui/Cart";
import ExlamationIcon from "../ui/ExlamationIcon";
import Layout from "../ui/Layout";
import Money from "../ui/Money";
import PendingIcon from "../ui/PendingIcon";
import SolidHomeIcon from "../ui/SolidHomeIcon";
import Chart from "../ui/Chart";
import Card from "../ui/Card";


export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-10 w-full h-full ">
        <div className="flex justify-between">
             <div className="flex gap-2">
                <div className="bg-blue-500 p-2 rounded-md">
                 <SolidHomeIcon/>
                </div>
               <p className="self-center">Dashboard</p>
             </div>
             <div className="flex items-center gap-2">
                <p className="self-center">Overview</p>
                <ExlamationIcon />
             </div>
       </div>
       <div >

       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
         <Card title="Total Earning" icon={<Money/>} value={"₹ 5000.0"} isEarning={true} />
         <Card title="Total Orders" icon={<Cart/>} value="40 Orders"  />
         <Card title="Number of Pending Orders" icon={<PendingIcon/>} value="10 Pending Orders" />
       </div>
       </div>
      
      </div>
    </Layout>
   
  )
}
 

