
import { Link } from 'react-router-dom';
import Layout from '../ui/Layout'
 type orderDetail = {customerName:string,orderName:string,deposit:number,finalPayment:number,deadLine:string,deliveryDate:string}
 const months:string[] = [ "January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December" ];
 
 const myDate:Date = new Date();

 const customizeDate =(months[myDate.getMonth()].slice(0,3)) + " " +  myDate.getDay() + ", "+ myDate.getFullYear().toString().slice(2,5)
const data:[orderDetail] = [
{customerName:"dfdvd dsdsds", orderName:"card",deposit:500,finalPayment:1000,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"cfdj dsdsds", orderName:"card",deposit:400,finalPayment:1000,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"cdvd dfdvfvvsdsds", orderName:"card",deposit:800,finalPayment:2000,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsdcvxcs", orderName:"card",deposit:1000,finalPayment:3000,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvxcdd dsdcxsds", orderName:"card",deposit:266,finalPayment:700,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:100,finalPayment:300,deadLine:customizeDate,deliveryDate:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:200,finalPayment:500,deadLine:customizeDate,deliveryDate:customizeDate}
]

export default function PendingList() {
 
  return (
    <Layout>
      <div className='bg-slate-50 p-4 border-2'>

     <div  className='grid grid-cols-4 mb-4 text-md md:text-lg font-medium lg:grid-cols-6'>

      <p >Order Name</p>
      <p>Delivery Date</p>
      <p>Advanced</p>
      <p>Total</p>
      <p>Remaining Amount</p>
      
      
     </div>
     {data.map((order,id)=><div className='grid grid-cols-3 py-3 text-md  md:grid-cols-6' key={id+Math.random()}>
     <p >{order.orderName}</p>
      <p >{order.deliveryDate}</p>
      <p >{order.deposit}</p>
      <p >{order.finalPayment}</p>
      <p >{order.finalPayment -  order.deposit}</p>
      <Link to={"/order-bill"} className='bg-blue-500 text-white font-semibold text-center p-1 rounded-md text-xs md:text-sm '>Mark Complete</Link>
     </div>)}
      </div>
     </Layout>

  )
}
