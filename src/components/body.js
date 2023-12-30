import React from 'react';
import { NavigationAddress } from './navigationAddress';
import { AttendanceStats } from './attendanceStats';


export const Body = () => {
  return(
    <div className='py-5 px-4'>
      <NavigationAddress/>
      <AttendanceStats/>
    </div>
  )
}