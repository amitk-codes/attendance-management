import React from 'react';
import DownIcon from "../../assets/icons/down_icon.svg"
import ClockIcon from "../../assets/icons/clock_icon.svg"
import PieIcon from "../../assets/icons/pie_icon.png"

export const Status = () => {
  return (
    <div className='status-outer-div me-5 d-flex flex-column justify-content-between'>
      <div className='status-heading'>Attendance Status</div>
      <div className=' d-flex'>
        <div>Last Week</div>
        <div><img src={DownIcon} alt='down icon' /></div>
      </div>


      <div className='status-main-content d-flex'>
        <div className=' d-flex align-items-center'>
          <div>
            <img src={ClockIcon} className='status-imgs' alt='clock icon' />
          </div>
          <div>
            <div>Avg hrs / Day</div>
            <div className='faded-text text-center text-small'>( 6hrs 48m )</div>
          </div>
        </div>
        <div className=' d-flex align-items-center'>
          <div><img src={PieIcon} className='status-imgs' alt='pie icon' /> </div>
          <div>
            <div className='text-medium'>On Time Arrival</div>
            <div className='faded-text text-center text-small'>95%</div>
          </div>
        </div>
      </div>


    </div>
  )
}