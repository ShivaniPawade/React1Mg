import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { dashboard, logo, call, logout, report, bell, offer, ambulance, account, group, map, user, mapview, ambulanceImage, callRequest } from "../../assets";
import { useNavigate, useLocation } from 'react-router-dom'
const Sidebar = () => {
  let location = useLocation();
  console.log(location)
  const [showReport, setshowReport] = useState(false)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={logo} alt='logo'></img>
      </div>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
        }
        to={"/1mg-dashboard"}>
        <div className="icons-border">
          <img className="icons " src={dashboard} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2 ">Dashboard</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      } to={"/calls"}>
        <div className="icons-border">
          <img className="icons" src={call} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2 ">Calls</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      }to={"/vehical-data"}>
        <div className="icons-border">
          <img className="icons" src={ambulance} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2 ">Vehicle Data</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      } to={"/employee-dashboard"}>
        <div className="icons-border">
          <img className="icons" src={account} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">employee</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none "
      } to={"/map-live-view"}>
        <div className="icons-border">
          <img className="icons" src={map} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Map Live View</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      } to={"/administration"}>
        <div className="icons-border">
          <img className="icons" src={account} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Administration</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      } to={"/hr-management"}>
        <div className="icons-border">
          <img className="icons" src={group} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">HR Management</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none "
      }style={{position:"relative"}} onClick={() => setshowReport(!showReport)}>
        <div className="icons-border">
          <img className="icons" src={report} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Reports</h2>
      {showReport === true ?
      // -------reports div  --------
      <div className="d-flex flex-column reports-link bg-white">

        <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center text-decoration-none nav-active " : "d-flex align-items-center  text-decoration-none"
      } to={"/hr-report"}>
        <div className="icons-border">
          <img className="icons" src={report} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Hr Report</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center text-decoration-none nav-active" : "d-flex align-items-center  text-decoration-none"
      } to={"/fitness-report"}>
        <div className="icons-border">
          <img className="icons" src={report} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Fitness Report</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center  text-decoration-none nav-active" : "d-flex align-items-center  text-decoration-none"
      } to={"/telementry-report"}>
        <div className="icons-border">
          <img className="icons" src={report} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Telemetric Report</h2>
      </NavLink>

      </div> : null}
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      } to={"/notifications"}>
        <div className="icons-border">
          <img className="icons" src={bell} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Notifications</h2>
      </NavLink>

      <NavLink className={({ isActive, isPending }) =>
        isActive ? "d-flex align-items-center mb-3 text-decoration-none nav-active" : "d-flex align-items-center mb-3 text-decoration-none"
      }to={"/offers"}>
        <div className="icons-border">
          <img className="icons" src={offer} alt="icon"></img>
        </div>
        <h2 className="sidebar-links pt-2">Offers</h2>
      </NavLink>

      <div className="d-flex align-items-center mb-3">
        <div className="icons-border logout-link ">
          <img className="logout-link icons" src={logout} alt="icon"></img>
        </div>
        <Link className=" logout-icon text-decoration-none " onClick={handleLogout}><h2 className="sidebar-links pt-2">Log Out</h2></Link>
      </div>
    </nav>
  );
};

export default Sidebar;
