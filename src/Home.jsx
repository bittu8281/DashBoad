import React, { useState } from 'react'
import 
{ BsJustify,BsSearch,BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { HiArrowDown, HiArrowLongUp } from "react-icons/hi2";
 import { IoIosHand } from "react-icons/io";
 import { PieChart, Pie } from 'recharts';
import Productsell from './Productsell';

//  import { PieChart } from '@mui/x-charts/PieChart';

// import SearchIcon from '@mui/icons-material/Search';

function Home({OpenSidebar}) {
    const [selects , setSelects] = useState();

    const data = [
        {
          name: 'Jan Feb',
          uv: 4000,
          pv: 2400,
        //   amt: 2400,
        },
        {
          name: 'Mar Apr',
          uv: 3000,
          pv: 1398,
        //   amt: 2210,
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
            <div>
            <h3>Hello Shahrukh <IoIosHand /></h3>
            </div>
            {/* <button className='search'><BsSearch /></button> */}
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <BsFillArchiveFill className='card_icon'/>
                </div>
                <div>
                <h4>Earning</h4>
                <h1>$198K</h1>
                <h5><span className='cardspan1'>< HiArrowLongUp />37.8%</span> This month</h5>
                </div>
               
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                   <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <div>
                <h4>Order</h4>
                <h1>$2.4K</h1>
                <h5><span className='cardspan2'> <HiArrowDown />2%</span> This month</h5>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <div>
                <h4>Balance</h4>
                <h1>$2.4K</h1>
                <h5><span className='cardspan3'> <HiArrowDown />2%</span>This month</h5>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <div>
                <h4>Total Sales</h4>
                <h1>$89k</h1>
                <h5><span className='cardspan4'>< HiArrowLongUp />11%</span>This month</h5>
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
                <div className='overviewpi'><h3 style={{color:'black'}}>Customer <br /><span style={{color:'grey'}}>Customers that buy products</span></h3>
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