import React, { useState } from 'react'
import { ambulanceImage, call, callRequest, mapview, callDispatched, callDeclined, callCompleted } from '../../../assets'
import NavbarCards from '../../layout/NavbarCards'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  const [userData, setuserData] = useState([
    {
      srNo: 1,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E"
    },
    {
      srNo: 2,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E"
    },
    {
      srNo: 3,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E"
    },
    {
      srNo: 4,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E"
    },
    {
      srNo: 5,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E"
    },
  ])
  const [auditData, setauditData] = useState([
    {
      sNo: 2,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C"
    },
    {
      sNo: 3,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C"
    },
    {
      sNo: 4,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C"
    },
    {
      sNo: 5,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C"
    },
    {
      sNo: 1,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C"
    },
  ])
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

      {/* ----------- recent call details start ----------- */}
      <div className='  mt-3 d-md-flex gap-3'>
        <div className='call-details common-border'>
          <div className='d-flex pt-3 pb-2 '>
            <h2 className='common-heading me-auto'>Recent Call Details</h2>
            <Link className='view-details text-decoration-none pt-2 pe-2'>View All</Link>
          </div>
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
              {userData.map((user) => {
                return (
                  <tr key={user.srNo}>
                    <td className='sr-border'>1</td>
                    <td>Amit J.</td>
                    <td>919988776655</td>
                    <td>65/Male</td>
                    <td>20-12-2023</td>
                    <td>1455</td>
                    <td>Chest Pain</td>
                    <td>28.67 N-77.06 E</td>
                  </tr>
                )
              })}
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className='graph common-border'>
          <h2 className='text-center'>Turn Around Time</h2>
               </div>
      </div>


      {/* ----------- recent call details  end----------- */}

      {/* --------- audit window  -------- */}
      <div className='common-border mt-3 audit-window'>
        <div className='d-flex pt-3 pb-2 '>
          <h2 className='common-heading me-auto'>Audit Window</h2>
          <Link className='view-details text-decoration-none pt-2 pe-2'>View All</Link>
        </div>
        <table>
          <thead>
            <tr >
              <th className='th-padding'>S. No</th>
              <th className='th-padding'>Item Name</th>
              <th className='th-padding'>Quantity</th>
              <th className='th-padding'>Inspection No.</th>
              <th className='th-padding'>Inspection Date</th>
              <th className='th-padding'>Images</th>
              <th className='th-padding'>Status</th>
              <th className='th-padding'>Inspector</th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((data) => {
              return (
                <tr key={data.sNo}>
                  <td className='td-padding'>1</td>
                  <td>AMBU Bag (Adult)</td>
                  <td>1</td>
                  <td>IN-33646</td>
                  <td>10-11-2023</td>
                  <td ><Link className='text-decoration-none'>view</Link></td>
                  <td className='text-success'>Satisfactory</td>
                  <td>Sandeep C</td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default HomeComponent