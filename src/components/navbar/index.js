import React, { useState } from 'react'
import NotificationIcon from '../../assets/icons/notification_icon.svg'
import MessageIcon from '../../assets/icons/message_icon.svg'
import ThemeToggle from '../../assets/icons/dark_toggle.svg'
import ProfileImg from '../../assets/images/profile_image.png'
import { Searchbar } from './searchbar'
import '../../stylesheets/navbar.css'
import { OffcanvasSidebar } from '../offcanvasSidebar'
import { SettingsDropdown } from './settingsDropdown'

export const Navbar = () => {
  return (
    <div className="nav-outer-div">
      <OffcanvasSidebar />
      <Searchbar />

      <SettingsDropdown />

      <div className="nav-btns bordered-nav-btn">
        <img src={NotificationIcon} />
      </div>

      <div className="nav-btns bordered-nav-btn">
        <img src={MessageIcon} />
      </div>

      <div className="nav-btns">
        <img src={ThemeToggle} />
      </div>

      <div className="nav-btns">
        <img src={ProfileImg} className="img-fluid" />
      </div>
    </div>
  )
}
