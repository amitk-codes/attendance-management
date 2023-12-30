import React from 'react';

export const Action = () => {
  return (
    <div className='ms-5 d-flex flex-column justify-content-between'>
      <div className=' text-center'>Action</div>

      <div className=' d-flex'>
        <div className='action-main-content'>
          <div className='time-in-action'>04:04:39 PM</div>
          <div className='date-in-action text-medium'>Wed 06, Dec 2023</div>

        </div>


        <div className=' d-flex flex-column justify-content-between ms-3'>

          <div className='action-btn'>Leave Request</div>
          <div className='action-btn'>Work From Home</div>

        </div>
      </div>



    </div>
  )
}