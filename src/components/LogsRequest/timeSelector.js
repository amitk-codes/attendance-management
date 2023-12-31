import React, { useState } from 'react'
import ListIcon from '../../assets/icons/list_icon.svg'
import CalenderIcon from '../../assets/icons/calender_icon.svg'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export const TimeSelector = () => {
  const radios = [
    { name: '30days', value: '1' },
    { name: 'Nov', value: '2' },
    { name: 'Oct', value: '3' },
    { name: 'Sep', value: '4' },
    { name: 'Aug', value: '5' },
    { name: 'Jul', value: '6' },
    { name: 'Jun', value: '7' },
  ]

  const radios2 = [
    { name: <img src={ListIcon} />, value: 'icon1' },
    { name: <img src={CalenderIcon} />, value: 'icon2' },
  ]
  const [radioValue, setRadioValue] = useState(radios[0].value)
  const [radio2Value, setRadio2Value] = useState(radios2[0].value)
  return (
    <div className="time-selector">
      <ButtonGroup className="me-4">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <ButtonGroup className="radio2">
        {radios2.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio2-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio2"
            value={radio.value}
            checked={radio2Value === radio.value}
            onChange={(e) => setRadio2Value(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  )
}
