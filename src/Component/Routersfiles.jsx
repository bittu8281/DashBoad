import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Product from './Product'
import Customer from './Customers'
import Income from './Income'
import Promote from './Product'
import Help from './Help'
import Mainpage from '../Mainpage'

function Routersfiles() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path ='/DashBoad' element={<Mainpage />} />
        <Route path ='/Product' element={<Product />} />
        <Route path ='/Customer' element={<Customer />} />
        <Route path ='/Income' element={<Income />} />
        <Route path ='/Promote' element={<Promote />} />
        <Route path ='/Help' element={<Help />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routersfiles
