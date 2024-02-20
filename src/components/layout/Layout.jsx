import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* <Sidebar /> */}
      <div className="d-flex flex-column">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
      </div>
      <div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Layout;
