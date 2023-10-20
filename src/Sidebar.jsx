import React, { useState } from 'react'
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
                <a href="#">
                    <BsGrid1X2Fill className='icon'/> Dashboard    <IoIosArrowForward />
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillArchiveFill className='icon'/> Products    <IoIosArrowForward />
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPeopleFill className='icon'/> Customers <IoIosArrowForward />
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPiggyBankFill className='icon'/> Income <IoIosArrowForward />
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPatchPlusFill className='icon'/> Promote <IoIosArrowForward />
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <MdHelpCenter className='icon'/> Help <IoIosArrowForward />
                </a>
            </li>
        </ul>
        
        <div className='sidebar-main'>
        <Box sx={{ flexGrow: 0,marginTop:'80%' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /><p className='signout'>Evano<br />Project Manager</p>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
          </Box>
        </div>
      
    </aside>
  )
}

export default Sidebar