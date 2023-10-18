import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Productsell() {
  return (
   
       <div style={{color : 'Black'}} className='ProductTable'>
            <table>
                <tr style={{border:"solid red 2px"}}>
                    <td style={{width:"75%",color:"Black",}}><h2>Product Sell</h2></td>
                    <td style={{width:"10%",color:"grey"}}><button className='search'><BsSearch /></button></td>
                    <td style={{width:"10%",color:"grey"}}>
                    <select className='dropdown'>
                    <option>Last 30DAys</option>
                    <option>last 3 month</option>
                    <option>last 6 month</option>
                    <option>last 1 year</option>
                    </select></td>
                </tr>
                <tr>
                    <th style={{width:"60%",color:"grey", textAlign:'left'}}>Product Name</th>
                    <th style={{width:"10%", color:"grey"}}>Stock</th>
                    <th style={{width:"10%",color:"grey"}}>Price</th>
                    <th style={{width: "20%",color:"grey"}}>Total Sales</th>
                </tr>
                <tr>
                    <td><p> Abstract 3D <br /><span>Lorem ipsum dolor sit amet consectetur.</span></p></td>
                    <td>32 in stock</td>
                    <td>$45.99</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td><p><img></img> Sarphens Illustration <br /><span>Lorem ipsum dolor sit amet consectetur.</span></p></td>
                    <td>32 in stock</td>
                    <td>$45.99</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td><p><img></img> Lorems <br /><span>Lorem ipsum dolor sit amet consectetur.</span></p></td>
                    <td>32 in stock</td>
                    <td>$45.99</td>
                    <td>20</td>
                </tr>
            </table>
        </div>
    
  )
}

export default Productsell
