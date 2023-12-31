import React from 'react';
import { NavigationAddress } from './navigationAddress';
import { AttendanceStats } from './attendanceStats';
import { LogsRequest } from './LogsRequest';


export const Body = () => {
  return(
    <div className='py-5 px-3 px-sm-4'>
      <NavigationAddress/>
      <AttendanceStats/>
      <LogsRequest/>
    </div>
  )
}