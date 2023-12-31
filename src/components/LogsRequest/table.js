import React from 'react'
import { contentData, headerData } from './tableData'
import { TimeSelector } from './timeSelector'
import ProgressIcon from '../../assets/icons/progress_icon.png'
import PieIcon from '../../assets/icons/pie_icon.png'
import TickIcon from '../../assets/icons/tick_icon.svg'
import WarningIcon from '../../assets/icons/warning_icon.svg'
import SmileIcon from '../../assets/icons/smile_icon.svg'
import DoneIcon from '../../assets/icons/done_icon.svg'
import SlowIcon from '../../assets/icons/slow_icon.svg'
import PendingIcon from '../../assets/icons/hourglass_icon.svg'
import { Badge } from '../../utils/badge'

export const Table = () => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col" className="align-middle">
            December, 2023
          </th>
          <th className="" colSpan={'6'} scope="col">
            {' '}
            <TimeSelector />{' '}
          </th>
        </tr>
      </thead>

      <thead className="thead2">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Attendance Visual</th>
          <th scope="col">Effective Hours</th>
          <th scope="col">Gross Hours</th>
          <th scope="col">Extra Hours</th>
          <th scope="col">Arrival</th>
          <th scope="col">Log</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Dec 04, Mon</td>
          <td>
            <img src={ProgressIcon} />
          </td>
          <td>
            <div className=" d-flex">
              <img src={PieIcon} />
              <div>9h 15m</div>
            </div>
          </td>

          <td>9h 59m</td>

          <td>0h 59m</td>

          <td>
            <div className=" d-flex">
              <img src={TickIcon} />
              <div>On Time</div>
            </div>
          </td>

          <td>
            <img src={WarningIcon} />
          </td>
        </tr>

        <tr style={{ backgroundColor: '#3e3d41' }}>
          <td>
            <div>
              <div>Dec 03, Sun</div>
              <Badge bgColor={'#f2a74d'} content={'W-OFF'} />
            </div>
          </td>
          <td style={{ paddingRight: '147px' }} colSpan={'6'}>
            Full day weekly-off
          </td>
        </tr>

        <tr>
          <td>Dec 02, Sat</td>
          <td>
            <img src={ProgressIcon} />
          </td>
          <td>
            <div className=" d-flex">
              <img src={PieIcon} />
              <div>8h 59m</div>
            </div>
          </td>

          <td>9h 59m</td>

          <td>0h 30m</td>

          <td>
            <div className=" d-flex">
              <img src={SmileIcon} />
            </div>
          </td>

          <td>
            <img src={DoneIcon} />
          </td>
        </tr>

        <tr>
          <td>Dec 01, Fri</td>
          <td>
            <img src={ProgressIcon} />
          </td>
          <td>
            <div className=" d-flex">
              <img src={PieIcon} />
              <div>8h 59m</div>
            </div>
          </td>

          <td>9h 59m</td>

          <td>1h 30m</td>

          <td>
            <div className=" d-flex">
              <img src={SlowIcon} />
              <div>0h 30m late</div>
            </div>
          </td>

          <td>
            <img src={PendingIcon} />
          </td>
        </tr>

        <tr style={{ backgroundColor: '#5f484e' }}>
          <td>
            <div>
              <div>Nov 30, Thu</div>
              <Badge bgColor={'#bd43ea'} content={'Leave'} />
            </div>
          </td>

          <td style={{ paddingRight: '147px' }} colSpan={'6'}>
            Sick Leave
          </td>
        </tr>
      </tbody>
    </table>
  )
}
