import React, { useState } from 'react'
import { ambulanceImage, call, mapview } from '../../../assets'
import NavbarCards from '../../layout/NavbarCards'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
    const [cards, setcards] = useState([
        {
          icon: call,
          title: "call requested",
          value: 2400,
          share: 9.5,
        },
        {
          icon: call,
          title: "call Dispatched",
          value: 2100,
          share: 9.5,
        },
        {
          icon: call,
          title: "call Completed",
          value: 2050,
          share: 9.5,
        },
        {
          icon: call,
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
    <div className="map-view d-flex mt-3">
      <div>
        <h2 className="map-title pt-4">Map View</h2>
        <p className="map-information">Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus nulla iaculis sed molestie. Nulla dui in eget non fusce tortor pellentesque. Est posuere cursus eleifend purus nibh ac. Amet aliquet sapien senectus tempor vulputate urna et mus.</p>
        <Link className="map-link ">View Live Map</Link>
      </div>
      <img src={mapview} alt="image"></img>
    </div>
    {/* ----------  map view end ------------ */}

    {/* ----------------  greeting start  ---------------- */}
    <div className="d-flex gap-4 mt-3">
      <div className="map-view greeting d-flex">
        <div>
          <h2 className="map-title greeting-color mb-0 pt-4">Greetings</h2>
          <h3 className="map-title ">Sandeep Krishna</h3>
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

    {/* --------------  cards   ------------------ */}

  </div>
  )
}

export default HomeComponent