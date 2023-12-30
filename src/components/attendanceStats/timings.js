import React from 'react';


export const Timings = () => {
  const timingsArr = [
    { value: "M", color: "text-white" },
    { value: "T", color: "text-white" },
    { value: "W", color: "active-text" },
    { value: "T", color: "text-white" },
    { value: "F", color: "text-white" },
    { value: "S", color: "text-success" },
    { value: "S", color: "text-danger" },
  ]
  return (
    <div className='d-flex flex-column justify-content-between'>
      <div className=' text-center'>Timings</div>
      <div className=' d-flex' style={{gap: "10px"}}>
        {timingsArr.map(({ value, color }) => {
          return (
            <div className={`${color} timings-days`}>{value}</div>
          )
        })}
      </div>

      <div className=' timings-main-content'>
        <div className=''>Today (09:30AM - 06:30PM)</div>
        <div className='text-small'>Duration: 9h 0m &nbsp; Break: 0m</div>
      </div>

    </div>
  )
}