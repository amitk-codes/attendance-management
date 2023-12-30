import React from 'react';
import { Status } from './status';
import { Timings } from './timings';
import { Action } from './action';
import "../../stylesheets/attendanceStats.css"

export const AttendanceStats = () => {
  return(
    <div className='attendance-stats-outer-div'>
      <Status/>
      <Timings/>
      <Action/>


      
    </div>
  )
}