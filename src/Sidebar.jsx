import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsBoxFill, BsGrid1X2Fill, BsFillArchiveFill, BsPiggyBankFill, BsPeopleFill,BsPatchPlusFill,} from 'react-icons/bs'
import { MdHelpCenter } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem'

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [show, setShow] = useState(false);
    const settings = ['Profile', 'Account', 'Logout'];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };



  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsBoxFill  className='icon_header'/> DashBoard 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
       
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <div className='sidebar-list-item-spacebetween'>
                      <h4><BsGrid1X2Fill className='icon'/> Dashboard </h4>
                      <h4><IoIosArrowForward /></h4>
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <div className='sidebar-list-item-spacebetween' onClick={() => setShow(!show)} >
                      <h4><BsFillArchiveFill className='icon'/> Products</h4>
                      <h4><IoIosArrowForward /></h4>
                    </div>
                   
                </a>
            </li>
            {show && <Typography className='sidebar-list-item'  style={{padding:'10px 10px'}}><BsFillArchiveFill className='icon'/><Link to='/Product'>Product Sales</Link></Typography>}
            <li className='sidebar-list-item'>
            <Link to='/Customer'> 
                    <div className='sidebar-list-item-spacebetween'><h4><BsPeopleFill className='icon'/>Customers</h4><h4><IoIosArrowForward /></h4></div>
            </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to = '/Income'>
                    <div className='sidebar-list-item-spacebetween'><h4><BsPiggyBankFill className='icon'/> Income </h4><h4><IoIosArrowForward /></h4></div>
            </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to = '/Promote'>
                    <div className='sidebar-list-item-spacebetween'><h4><BsPatchPlusFill className='icon'/> Promote </h4><h4><IoIosArrowForward /></h4></div>
            </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to = '/Help'>
                    <div className='sidebar-list-item-spacebetween'><h4><MdHelpCenter className='icon'/>Help</h4><h4><IoIosArrowForward /></h4></div>
            </Link>
            </li>
        </ul>
        
        <div className='sidebar-logout-setting'>

        <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /><p className='signout' style={{fontSize :'1.1rem'}}>Bittu Singh<br /><span style={{fontSize:'0.9rem'}}>Project Manager</span></p>
              </IconButton>
            </Tooltip>
            
          </Box>
          <Menu
              sx={{ mt: '45px' , top:'-15% !important'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </div>
      
    </aside>
  )
}

export default Sidebar