import React, { useState } from 'react'
import { ambulanceImage, call, callRequest, mapview, callDispatched, callDeclined, callCompleted } from '../../../assets'
import NavbarCards from '../../layout/NavbarCards'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  // const [userData, setuserData] = useState([
  //   {
  //     srNo: 1,
  //     name: "Amit J.",
  //     mobileNo: 919988776655,
  //     ageGender: "65/Male",
  //     date: 20 - 12 - 2023,
  //     time: 1455,
  //     emergency: "Chest Pain",
  //     latLong: "28.67 N - 77.06 E"
  //   },
  //   {
  //     srNo: 2,
  //     name: "Amit J.",
  //     mobileNo: 919988776655,
  //     ageGender: "65/Male",
  //     date: 20 - 12 - 2023,
  //     time: 1455,
  //     emergency: "Chest Pain",
  //     latLong: "28.67 N - 77.06 E"
  //   },
  //   {
  //     srNo: 3,
  //     name: "Amit J.",
  //     mobileNo: 919988776655,
  //     ageGender: "65/Male",
  //     date: 20 - 12 - 2023,
  //     time: 1455,
  //     emergency: "Chest Pain",
  //     latLong: "28.67 N - 77.06 E"
  //   },
  //   {
  //     srNo: 4,
  //     name: "Amit J.",
  //     mobileNo: 919988776655,
  //     ageGender: "65/Male",
  //     date: 20 - 12 - 2023,
  //     time: 1455,
  //     emergency: "Chest Pain",
  //     latLong: "28.67 N - 77.06 E"
  //   },
  //   {
  //     srNo: 5,
  //     name: "Amit J.",
  //     mobileNo: 919988776655,
  //     ageGender: "65/Male",
  //     date: 20 - 12 - 2023,
  //     time: 1455,
  //     emergency: "Chest Pain",
  //     latLong: "28.67 N - 77.06 E"
  //   },
  // ])
  const [cards, setcards] = useState([
    {

      icon: callRequest,
      title: "call requested",
      value: 2400,
      share: 9.5,
    },
    {
      icon: callDispatched,
      title: "call Dispatched",
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
    <div className="dashboard ">

      <div className="d-flex justify-content-between">
        {
          cards.map((item) => {
            return (<div className="">
              <NavbarCards item={item} />
            </div>)
          })
        }
      </div>

      {/* ----------  map view start ------------ */}
      <div className="map-view common-border d-flex mt-3">
        <div>
          <h2 className="common-heading pt-4">Map View</h2>
          <p className="map-information">Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus nulla iaculis sed molestie. Nulla dui in eget non fusce tortor pellentesque. Est posuere cursus eleifend purus nibh ac. Amet aliquet sapien senectus tempor vulputate urna et mus.</p>
          <Link className="map-link ">View Live Map</Link>
        </div>
        <img src={mapview} alt="image"></img>
      </div>
      {/* ----------  map view end ------------ */}

      {/* ----------------  greeting start  ---------------- */}
      <div className="d-flex gap-4 mt-3">
        <div className="map-view common-border d-flex">
          <div>
            <h2 className="common-heading greeting-color mb-0 pt-4">Greetings</h2>
            <h3 className="common-heading ">Sandeep Krishna</h3>
            <p className="greeting-information">Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus nulla iaculis sed molestie. Nulla dui in eget non fusce tortor pellentesque. Est posuere cursus eleifend purus nibh ac. Amet aliquet sapien senectus tempor vulputate urna et mus.</p>
          </div>
          <img src={ambulanceImage} alt="image"></img>
        </div>
        <div className="recent-news">
          <div className="recent-background">
            <h2 className="recent-title pt-2">Recent NEWS</h2>
            <p className="recent-information pt-4">In view of the recent surge in Covid-19 cases in Kerala, Delhi, Goa, Gujarat
              and Karnataka, Union health minister Mansukh Mandaviya on Wednesday chaired a high-level meeting with top officials and chief health secretaries.</p>
            <Link className="recent-information text-decoration-none ">Read More... </Link>
          </div>

        </div>
      </div>
      {/* ------------------  greeting end ------------------ */}

      {/* ----------- recent call details start ----------- */}
      <div className='call-details common-border mt-3'>
        <div className='d-flex pt-3 pb-2 '>
          <h2 className='common-heading me-auto'>Recent Call Details</h2>
          <Link className='view-details text-decoration-none pt-2 pe-2'>View All</Link>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th >S. No</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Age/Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Emergency Type</th>
                <th>Lat/Long</th>
              </tr>
            </thead>
            <tbody>
              {/* {userData.map((user) => {
                <tr key={user.srNo}>
                  <td scope="row" key={user.id}>{user.srNo}</td>
                  <td key={user.name}>{user.name}</td>
                  <td key={user.mobileNo}>{user.mobileNo}</td>
                  <td key={user.ageGender}>{user.ageGender}</td>
                  <td key={user.date}>{user.date}</td>
                  <td key={user.time}>{user.time}</td>
                  <td key={user.emergency}>{user.emergency}</td>
                  <td key={user.latLong}>{user.latLong}</td>
                </tr>
              })} */}
              <tr>
                <td className='sr-border'>1</td>
                <td>Amit J.</td>
                <td>919988776655</td>
                <td>65/Male</td>
                <td>20-12-2023</td>
                <td>1455</td>
                <td>Chest Pain</td>
                <td>28.67 N-77.06 E</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Amit J.</td>
                <td>919988776655</td>
                <td>65/Male</td>
                <td>20-12-2023</td>
                <td>1455</td>
                <td>Chest Pain</td>
                <td>28.67 N-77.06 E</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Amit J.</td>
                <td>919988776655</td>
                <td>65/Male</td>
                <td>20-12-2023</td>
                <td>1455</td>
                <td>Chest Pain</td>
                <td>28.67 N-77.06 E</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Amit J.</td>
                <td>919988776655</td>
                <td>65/Male</td>
                <td>20-12-2023</td>
                <td>1455</td>
                <td>Chest Pain</td>
                <td>28.67 N-77.06 E</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Amit J.</td>
                <td>919988776655</td>
                <td>65/Male</td>
                <td>20-12-2023</td>
                <td>1455</td>
                <td>Chest Pain</td>
                <td>28.67 N-77.06E</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ----------- recent call details  end----------- */}

    </div>
  )
}

export default HomeComponent