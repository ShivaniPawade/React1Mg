import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./Layout.css";
import {
  dashboard,
  logo,
  call,
  logout,
  report,
  bell,
  offer,
  ambulance,
  account,
  group,
  map,
  user,
  mapview,
  ambulanceImage,
  callRequest,
  callDispatched,
  callDeclined,
} from "../../assets";
import NavbarCards from "./NavbarCards";
import HomeComponent from "../dashboard/Home/HomeComponent";
import EmployeeSidebar from "./EmployeeSidebar";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const url = window.location.href;
  console.log(url);
  const path = url.split("/").pop(); // This will get the last part of the URL after splitting it by '/'
  // Convert the path into a human-readable string
  const formattedString = path.replace(/-/g, " ");
  let location = useLocation();
  console.log(location);
  return (
    <div className="layout d-flex pt-3">
      {/* ---------------  sidebar start  ------------- */}
      {location.pathname.includes("employee-dashboard") ? (
        <EmployeeSidebar />
      ) : (
        <Sidebar />
      )}
      {/* ---------------  sidebar end  ------------- */}

      <div className="w-100 ps-3 ">
        <div className="d-flex justify-content-between mb-3 ">
          <h1 className="link-heading">{formattedString}</h1>
          <div className="user-img">
            <img src={user} alt="img"></img>
          </div>
        </div>
        {/* ---------------- blank page ------------ */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
