import VisualIcon from '../../assets/icons/progress_icon.png'
import PieIcon from '../../assets/icons/pie_icon.png'

export const headerData = [
  'Date',
  'Attendance Visual',
  'Effective Hours',
  'Gross Hours',
  'Extra Hours',
  'Arrival',
  'Log',
]

export const contentData = [
  {
    date: <div>Dec 04, Mon</div>,
    visual: (
      <div>
        {' '}
        <img src={VisualIcon} />
      </div>
    ),
    effectiveHour: (
      <div>
        {' '}
        <img src={PieIcon} />
        <div>9h 15m</div>
      </div>
    ),
    grossHour: <div>9h 59m</div>,
    extraHour: <div>0h 59m</div>,
    arrival: (
      <div>
        <img src="" alt="tick icon" /> <div>On Time</div>{' '}
      </div>
    ),
    log: (
      <div>
        {' '}
        <img src="" alt="warning icon" />{' '}
      </div>
    ),
  },
]
