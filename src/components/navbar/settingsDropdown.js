import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import SettingsIcon from "../../assets/icons/settings_icon.svg"
import NotificationIcon from "../../assets/icons/notification_icon.svg"
import MessageIcon from "../../assets/icons/message_icon.svg"
import ThemeToggle from "../../assets/icons/dark_toggle.svg"
import ProfileImg from "../../assets/images/profile_image.png"


export const SettingsDropdown = () => {
  return (
    
      <Dropdown className="settings-dropdown d-none">
        <Dropdown.Toggle className='bordered-nav-btn' id="dropdown-custom">
          <img
            src={SettingsIcon}
            alt="settings icon"
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
        </Dropdown.Toggle>

        

        <Dropdown.Menu>

        <Dropdown.Item>
          <img src={ProfileImg} className='img-fluid' />
          <div>Profile</div>
          </Dropdown.Item>


          <Dropdown.Item eventKey="1">
            <img src={NotificationIcon} />
            <div>Notifications</div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <img src={MessageIcon} />
            <div>Messages</div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <img src={ThemeToggle} />
            <div>Change Theme</div>
          </Dropdown.Item>
          {/* <div className='nav-btns bordered-nav-btn'>
        <img src={NotificationIcon} />
      </div>

      <div className='nav-btns bordered-nav-btn'>
        <img src={MessageIcon} />
      </div>

      <div className='nav-btns'>
        <img src={ThemeToggle} />

      </div> */}
        </Dropdown.Menu>
      </Dropdown>
  )
}