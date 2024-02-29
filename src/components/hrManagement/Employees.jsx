import React, { useState } from 'react'
import NavbarCards from '../layout/NavbarCards'
import { callCompleted, callDeclined, callDispatched, callRequest } from '../../assets'
import '../hrManagement/Employees.css'
import Greetings from '../commonComponents/Greetings'
import RecentNews from '../commonComponents/RecentNews'
import { Link } from 'react-router-dom'

const Employees = () => {
  const [cards, setcards] = useState([
    {

      icon: callRequest,
      title: "Trips Completed",
      value: 2400,
      share: 9.5,
    },
    {
      icon: callDispatched,
      title: "Trips Rescheduled",
      value: 2100,
      share: 9.5,
    },
    {
      icon: callCompleted,
      title: "call Completed",
      value: 2050,
      share: 9.5,
    },
    {
      icon: callDeclined,
      title: "call Declined",
      value: 150,
      share: 9.5,
    }

  ])
  return (
    <div className=''>
      <div className="d-flex justify-content-between ">
        {
          cards.map((item) => {
            return (<div className="">
              <NavbarCards item={item} />
            </div>)
          })
        }
      </div>
      <div className="d-flex gap-4 mt-3">
        <Greetings />
        <div className='common-border w-75 d-flex justify-content-between p-3'>
          <div class="btn-group align-items-start ">
            <button class="btn btn-secondary btn-sm" type="button">
              date
            </button>
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li>22-12-2023</li>
              <li>23-12-2023</li>
              <li>24-12-2023</li>
            </ul>
          </div>
            <Link className='text-decoration-none veiw-attendence'>View Attendance</Link>
        </div>
        
      </div>
      <div className="d-flex gap-4 mt-3 ">
        <div className=' map-view pt-3 common-border calender'>
          <h2 className='common-heading'>Calander</h2>
          <div></div>
        </div>
        <div>
          <RecentNews />
        </div>
      </div>

    </div>
  )
}

export default Employees
