import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Sidebar } from './sidebar';
import MenuIcon from "../assets/icons/menu_icon.svg"

export const OffcanvasSidebar = () => {
  const [open, setOpen] = useState(false)
  return(
    <div className='offcanvas-sidebar'>

      <img onClick={()=>setOpen(true)} src={MenuIcon} alt='menu icon'/>
      

      <Offcanvas style={{backgroundColor: "#171717"}}  className={" w-auto"} show={open} onHide={()=>setOpen(false)}>
        <Sidebar/>
      </Offcanvas>
    </div>
  )
}