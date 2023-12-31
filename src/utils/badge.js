import React from 'react'

export const Badge = ({ bgColor, content }) => {
  return (
    <div
      className="rounded px-1"
      style={{ backgroundColor: bgColor, fontSize: '14px' }}
    >
      {content}
    </div>
  )
}
