import React from 'react'
import { BsFillArchiveFill,BsSearch, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HiArrowDown, HiArrowLongUp } from "react-icons/hi2";
import { IoIosHand } from "react-icons/io";
import { PieChart, Pie } from 'recharts';
import Productsell from './Productsell';
import Carddata from './Jasondata';
import { Typography } from '@mui/material';

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
            <h3>Hello Bittu<IoIosHand /></h3>  
            <form className='search'>
                <input type='text' placeholder='Search' className='searchinput' />
                <button type='button' className='searchbutton'>
                    <i className='ri-search-2-line'><BsSearch /></i>
                </button>
            </form> 
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner card-inner1'>
                <BsFillArchiveFill className='card_icon'/>
                </div>
                <div className='card-content'>
                <Typography sx={{fontSize:'1em'}}>{Carddata.Earning.title}</Typography>
                <Typography sx={{fontSize:'1.5em', fontWeight: 'bold'}}>{Carddata.Earning.Amount}</Typography>
                <Typography sx={{fontSize:'0.8em'}}><span className='cardgreen'>< HiArrowLongUp />{Carddata.Earning.hike}</span> {Carddata.Earning.month}</Typography>
                </div>
               
                
            </div>
            <div className='card'>
                <div className='card-inner card-inner2'>
                   <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <div className='card-content'>
                <Typography sx={{fontSize:'1em'}}>{Carddata.Order.title}</Typography>
                <Typography sx={{fontSize:'1.5em', fontWeight: 'bold'}}>{Carddata.Order.Amount}</Typography>
                <Typography sx={{fontSize:'0.8em'}}><span className='cardred'> <HiArrowDown />{Carddata.Order.hike}</span> {Carddata.Order.month}</Typography>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner card-inner3'>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <div className='card-content'>
                <Typography sx={{fontSize:'1em'}}>{Carddata.Balance.title}</Typography>
                <Typography sx={{fontSize:'1.5em', fontWeight: 'bold'}}>{Carddata.Balance.Amount}</Typography>
                <Typography sx={{fontSize:'0.8em'}}><span className='cardred'> <HiArrowDown />{Carddata.Balance.hike}</span>{Carddata.Balance.month}</Typography>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner card-inner4'>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <div className='card-content'>
                <Typography sx={{fontSize:'1em'}}>{Carddata.Total.title}</Typography>
                <Typography sx={{fontSize:'1.5em', fontWeight: 'bold'}}>{Carddata.Total.Amount}</Typography>
                <Typography sx={{fontSize:'0.8em'}}><span className='cardgreen'>< HiArrowLongUp />{Carddata.Total.hike}</span>{Carddata.Total.month}</Typography>
                </div>
            </div>
        </div>

        <div className='chartsmain'>
           
        <div className='charts'>
        <div style={{ width: '100%', height: 400, backgroundColor: 'white', borderRadius:'30px' }} className='bg_color'>
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

            <ResponsiveContainer width="100%" height="70%" >
            
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
            <div style={{ width: '100%', height:  400, backgroundColor: 'white', borderRadius:'30px' }}>
                <div className='overviewpi'>
                    <h3>Customer <br /><span style={{color:'grey'}}>Customers that buy products</span></h3>
                </div>
            <ResponsiveContainer width="100%" height="70%">
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