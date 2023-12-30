import React from 'react';
import { Breadcrump } from '../utils/breadcrump';

export const NavigationAddress = () => {
  return(
    <div  className=' d-flex' style={{gap: "5px"}}>
      <div style={{color: "#dfdee0"}}>My Space</div>
      <Breadcrump/>
      <div className='active-text'>Attendance</div>
    </div>
  )
}