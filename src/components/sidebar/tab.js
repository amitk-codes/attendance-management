import React from 'react'

export const SidebarTab = ({ name, icon }) => {
  return (
    <div className="sidebar-tab cursor-pointer">
      <div>
        <img src={icon} alt="home icon" />
      </div>

      <div className=" text-black">{name}</div>
    </div>
  )
}
