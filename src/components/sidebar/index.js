import React from 'react'
import HomeIcon from '../../assets/icons/home_icon.svg'
import { SidebarTab } from './tab'
import '../../stylesheets/sidebar.css'
import MyAccordion from './accordionTab'
import Logo from '../../assets/images/logo_image.png'

export const Sidebar = () => {
  return (
    <div className="sidebar-outer-div">
      <div className="text-white logo-div my-5">
        <img src={Logo} alt="logo" className="img-fluid" />
      </div>

      <hr />

      <div className=" d-flex flex-column" style={{ gap: '25px' }}>
        <SidebarTab icon={HomeIcon} name={'Home'} />
        <MyAccordion />
      </div>
    </div>
  )
}
