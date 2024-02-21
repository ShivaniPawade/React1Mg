import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import './Layout.css'
import { dashboard, logo, call, logout, report, bell, offer, ambulance, account, group, map, user, mapview, ambulanceImage, callRequest } from "../../assets";
import NavbarCards from "./NavbarCards";
const Layout = () => {
  const [cards, setcards] = useState([
    {
      icon: logo,
      title: "call requested",
      value: 2400,
      share: 9.5,
    },
    {
      icon: logo,
      title: "call requested",
      value: 2400,
      share: 9.5,
    },
    {
      icon: logo,
      title: "call requested",
      value: 2400,
      share: 9.5,
    },
    {
      icon: logo,
      title: "call requested",
      value: 2400,
      share: 9.5,
    }

  ])
  return (
    <div className="layout d-flex pt-3">
      {/* ---------------  sidebar start  ------------- */}
      <nav className="sidebar">
        <div className="logo">
          <img src={logo} alt='logo'></img>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons " src={dashboard} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"> <h2 className="sidebar-links pt-2 ">Dashboard</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={call} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"> <h2 className="sidebar-links pt-2 ">Calls</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={ambulance} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"> <h2 className="sidebar-links pt-2 ">Vehicle Data</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={account} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"><h2 className="sidebar-links pt-2">Employees</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={map} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"> <h2 className="sidebar-links pt-2">Map Live View</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={account} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"> <h2 className="sidebar-links pt-2">Administration</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={group} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"><h2 className="sidebar-links pt-2">HR Management</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={report} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"><h2 className="sidebar-links pt-2">Reports</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={bell} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"><h2 className="sidebar-links pt-2">Notifications</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border">
            <img className="icons" src={offer} alt="icon"></img>
          </div>
          <Link className="text-decoration-none"><h2 className="sidebar-links pt-2">Offers</h2></Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icons-border logout-link ">
            <img className="logout-link icons" src={logout} alt="icon"></img>
          </div>
          <Link className=" logout-icon text-decoration-none "><h2 className="sidebar-links pt-2">Log Out</h2></Link>
        </div>
      </nav>
      {/* ---------------  sidebar end  ------------- */}

      <div className="w-100 ps-3">
        <div className="d-flex justify-content-between">
          <h1 className="link-heading">1 MG Dashboard</h1>
          <img src={user} alt="img"></img>
        </div>
        {/* ---------------- blank page ------------ */}
        <div className="dashboard ">

          <div className="d-flex justify-content-between">
          {
            cards.map((item) => {
              return (<div className="">
                <NavbarCards />
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
      </div>
    </div>


  );
};

export default Layout;
