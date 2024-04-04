
import Layout from '../ui/Layout'
 type orderDetail = {customerName:string,orderName:string,deposit:number,finalPayment:number,deadLine:string}
 const myDate:Date = new Date();
 const customizeDate =myDate.getDay() + " - " + (myDate.getMonth() + 1 ) + " - "+ myDate.getFullYear()
const data:[orderDetail] = [
{customerName:"dfdvd dsdsds", orderName:"card",deposit:500,finalPayment:1000,deadLine:customizeDate},
{customerName:"cfdj dsdsds", orderName:"card",deposit:400,finalPayment:100,deadLine:customizeDate},
{customerName:"cdvd dfdvdvvsdsds", orderName:"card",deposit:800,finalPayment:200,deadLine:customizeDate},
{customerName:"dfdvd dsdsdcvxcs", orderName:"card",deposit:1000,finalPayment:300,deadLine:customizeDate},
{customerName:"dfdvxcdd dsdcxsds", orderName:"card",deposit:266,finalPayment:700,deadLine:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:100,finalPayment:300,deadLine:customizeDate},
{customerName:"dfdvd dsdsds", orderName:"card",deposit:200,finalPayment:500,deadLine:customizeDate}
]

export default function PendingList() {
 
  return (
    <Layout>
      <div className='p-5'>
      <table className='bg-slate-50 text-center border-spacing-5'>
        <tr className=''>
          <th>Customer Name</th>
          <th>Order</th>
          <th>Deposit</th>
          <th>final Payment</th>
          <th>Deadline</th>
        </tr>
        {data.map((data,id)=><tr className='p-5 border-spacing-5' key={id+Math.random()}>
         <td>{data.customerName}</td>
         <td>{data.orderName}</td>
         <td>{data.deposit}</td>
         <td>{data.finalPayment}</td>
         <td>{data.deadLine}</td>
         <button>Comppleted</button>
        </tr>)}
      </table>
      </div>
     </Layout>

  )
}
