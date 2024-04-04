
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
 
const data = [
    {
      name: 'Marriage-Card',
      quantity: 4000,
     
    },
    {
      name: 'Books',
      quantity: 3000,
    
    },
    {
      name: 'Visting-Cards',
      quantity: 2000,
     
    },
    {
      name: 'Flex',
      quantity: 2780,
     
    },
    {
      name: 'Pamplets',
      quantity: 1890,
     
    },
    {
      name: '4-colour-etc',
      quantity: 2390,
     
    },
    {
      name: 'Others',
      quantity: 3490,
      
    },
  ];


export default function Chart() {
 
  return (
   
    <BarChart className='self-center'
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity"   fill="#3b82f6" activeBar={<Rectangle fill="#69F0AE" stroke="" />} />
   
    </BarChart>
  // </ResponsiveContainer>
  )
}
