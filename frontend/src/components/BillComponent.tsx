
import { useRecoilValue } from 'recoil'
import Layout from '../ui/Layout'
import { currentOrderState } from '../store/atom'
import { useRef } from 'react'
import html2canvas from 'html2canvas'


export default function BillComponent() {
  const currentOrder = useRecoilValue(currentOrderState)
  const billRef = useRef(null)
  const reamining:number=Number(currentOrder.total) - Number(currentOrder.advance)

  const handleDownloadImage = async () => {
    const element:HTMLElement = billRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');
console.log(link.download)
    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
     
    } else {
      window.open(data);
    }
  };


  return (
    <Layout>

        <div className='bg-slate-50 flex flex-col p-5 gap-4'>
          <button onClick={handleDownloadImage} className='bg-blue-500 text-slate-50 p-2 rounded-md self-end hover:bg-blue-600'>Download Bill</button>
          <div ref={billRef} className='flex flex-col gap-10 border-2 border-slate-700 rounded-sm p-5 '>
            <div className='flex justify-center'>

        <p className='text-4xl font-bold text-blue-800   italic'>PAIGHAM<span className='text-blue-600' > Printers</span>
          </p>
            </div>
            <div className='grid grid-cols-2'>
            <div className='flex  flex-col gap-3'>
              <p>
                  Customer Name: <span className='text-slate-600 font-medium'>{currentOrder.customerName}</span>
              </p>
              <p>
                  Order Name: <span className='text-slate-600 font-medium'>{currentOrder.orderName}</span>
              </p>
              <p>
                Phone: <span className='text-slate-600 font-medium'>{currentOrder.phone}</span>
              </p>

            </div>
            <div  className='flex items-end flex-col gap-3'>
              <p>
                Date: <span className='text-slate-600 font-medium'>{new Date().toDateString()}</span>
              </p>
              <p>
                Due Date: <span className='text-slate-600 font-medium'>{new Date(currentOrder.deliveryDate).toDateString()}</span>
              </p>
            </div>
            </div>
            <div className='grid grid-cols-3 border-2 p-2 border-slate-600 border-dashed '>
              <div className='p-1 border-slate-700 border-dashed border-r-2'>
                Quantity
              </div>
              <div  className='p-1 border-slate-700 border-dashed border-r-2' >
                Product 
              </div>
              <div  className='p-1'>
                Amount (Total)
              </div>
              <div className='p-1 border-t-2 border-dashed border-slate-700 border-r-2'>
                {currentOrder.quantity}
              </div>
              <div className='p-1 border-t-2 border-dashed border-slate-700 border-r-2' >
                {currentOrder.orderType}
              </div>
              <div className='border-t-2 border-dashed border-slate-700 p-1'>
              ₹ {currentOrder.total}/-
              </div>
              <div className='col-start-2 mt-5 border-dashed border-r-2 border-l-2 border-slate-700 p-1'>
                Advance
              </div>
              <div className='mt-5 p-1  '>
              ₹ {currentOrder.advance}/-
              </div>
              <div className='col-start-2 border-dashed border-r-2 border-l-2 border-slate-700 p-1 border-t-2 '>
                {currentOrder.orderState==="new"?"Amount to be paid":"Paid"}
              </div>
              <div className='p-1 border-t-2 border-slate-700 border-dashed'>
              ₹ {reamining}/-
              </div>
            </div>
           
          
          </div>
        </div>
     
    </Layout>
  )
}
