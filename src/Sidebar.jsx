import React from 'react'
import {BsBoxFill, BsGrid1X2Fill, BsFillArchiveFill, BsPiggyBankFill, BsPeopleFill,BsPatchPlusFill,} from 'react-icons/bs'
 import { MdHelpCenter } from "react-icons/md";
 import { IoIosArrowForward } from "react-icons/io";

function Sidebar({openSidebarToggle, OpenSidebar}) {
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
    </aside>
  )
}

export default Sidebar