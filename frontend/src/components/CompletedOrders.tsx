
import { Link } from 'react-router-dom';
import Layout from '../ui/Layout'
 type orderDetail = {customerName:string,orderName:string,deposit:number,finalPayment:number,deadLine:string,deliveryDate:string}
 const months:string[] = [ "January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December" ];
 
 const myDate:Date = new Date();

 const customizeDate =(months[myDate.getMonth()].slice(0,3)) + " " +  myDate.getDay() + ", "+ myDate.getFullYear().toString().slice(2,5)
const data:[orderDetail] = [
{customerName:"dfdvd dsdsds", orderName:"card",deposit:500,finalPayment:1000,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"cfdj dsdsds", orderName:"card",deposit:400,finalPayment:100,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"cdvd dfdvfvvsdsds", orderName:"card",deposit:800,finalPayment:200,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsdcvxcs", orderName:"card",deposit:1000,finalPayment:300,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvxcdd dsdcxsds", orderName:"card",deposit:266,finalPayment:700,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:100,finalPayment:300,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:200,finalPayment:500,deadLine:customizeDate,deliveryDate:customizeDate}
]

export default function PendingList() {
 
  return (
    <Layout>
      <div className='bg-slate-50 p-4 border-2 roun\'>

     <div  className='grid grid-cols-3 mb-4 text-md md:text-lg font-medium'>
      <p className='hidden md:block' >Customer Name</p>
      <p >Order Name</p>
      
     </div>
     {data.map((order,id)=><div className='grid grid-cols-3 py-3 text-md ' key={id+Math.random()}>
     <p >{order.customerName}</p>
     
      <p >{order.orderName}</p>
    
      <Link  to={"order-bill"} className='bg-blue-500 text-white font-semibold text-center p-1 rounded-md text-xs md:text-sm hover:bg-blue-600'>View Bill</Link>
     </div>)}
      </div>
     </Layout>

  )
}
