import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
 import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 import { HiArrowDown, HiArrowLongUp } from "react-icons/hi2";
 import { IoIosHand } from "react-icons/io";
 import { PieChart, Pie } from 'recharts';
import Productsell from './Productsell';
function Home() {
    const data = [
        {
          name: 'Jan Feb',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Mar Apr',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'May Jun',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jul Aug',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Sep Oct',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Nov Dec',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        
      ];
      const data01 = [
        { name: 'Quarterly', value: 400 },
        { name: 'Halfyearly', value: 300 },
        { name: 'Annual', value: 300 },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Shahrukh<IoIosHand /></h3>   
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <BsFillArchiveFill className='card_icon'/>
                </div>
                <div>
                <h4>Earning</h4>
                <h1>$198K</h1>
                <h5><span className='cardgreen'>< HiArrowLongUp />37.8%</span> This month</h5>
                </div>
               
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                   <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <div>
                <h4>Order</h4>
                <h1>$2.4K</h1>
                <h5><span className='cardred'> <HiArrowDown />2%</span> This month</h5>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <div>
                <h4>Balance</h4>
                <h1>$2.4K</h1>
                <h5><span className='cardred'> <HiArrowDown />2%</span>This month</h5>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <div>
                <h4>Total Sales</h4>
                <h1>$89k</h1>
                <h5><span className='cardgreen'>< HiArrowLongUp />11%</span>This month</h5>
                </div>
            </div>
        </div>

        <div className='chartsmain'>
           
        <div className='charts'>
        <div style={{ width: '100%', height: 300 }} className='bg_color'>
        <div className='OverviewMon'>
                <div className='chartup'>
                    <h3 >Overview <br /><span style={{color:'grey'}}>Monthly Earning</span></h3>
                    
                </div>
                <select className='dropdown'>
                    <option>Quarterly</option>
                    <option>Halfyearly</option>
                    <option>Annual</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
            
            <BarChart
            width={500}
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
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
            <div style={{ width: '100%', height: 300 }}>
                <div className='overviewpi'>
                    <h3>Customer <br /><span style={{color:'grey'}}>Customers that buy products</span></h3>
                </div>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
            </ResponsiveContainer>
        </div>
        </div>
        </div>

      
        <Productsell />
    </main>
    
  )
}

export default Home