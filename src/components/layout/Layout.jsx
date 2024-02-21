import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import './Layout.css'
import { dashboard, logo, call, logout, report, bell, offer, ambulance, account, group, map, user } from "../../assets";
const Layout = () => {
  return (
    <div className="layout d-flex pt-3">
      {/* ---------------  sidebar start  ------------- */}
      <div className="sidebar">
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
      </div>
      {/* ---------------  sidebar end  ------------- */}

      <div className="w-100 ps-3">
        <div className="d-flex justify-content-between">
          <h1 className="link-heading">1 MG Dashboard</h1>
          <img src={user} alt="img"></img>
        </div>
        <div className="">blank page</div>
      </div>
    </div>
  );
};

export default Layout;
