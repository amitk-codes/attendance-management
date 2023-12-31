import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export const TabSelector = () => {
  const radios = [
    { name: 'Attendance Logs', value: '1' },
    { name: 'Attendance Requests', value: '2' },
  ]
  const [radioValue, setRadioValue] = useState(radios[0].value)
  return (
    <div className="time-selector tab-selector">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`tabSelector-${idx}`}
            type="radio"
            variant="outline-primary"
            name="tabSelector"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            className=" w-auto"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  )
}
