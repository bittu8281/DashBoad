import React,{useState} from 'react'
import '../App.css'
import Header from '../Header'
import Sidebar from '../Sidebar'

function Customers() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <h1>This is a Customer page</h1>
    </div>
  )
}

export default Customers
