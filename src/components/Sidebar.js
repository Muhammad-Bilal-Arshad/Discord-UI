import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import {FaFire} from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
        <SidebarIcon icon={<BsPlus size = '32'/>}/>
        <SidebarIcon icon={<BsFillLightningFill size = '20'/>}/>
        <SidebarIcon icon={<BsGearFill size = '20'/>}/>
        <SidebarIcon icon={<FaFire size = '28'/>}/>
      
    </div>
  )
}

const SidebarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
