import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="d-flex flex-column">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>about</Link>
    </div>
  );
};

export default Sidebar;
