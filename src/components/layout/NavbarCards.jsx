import React from "react";
import { callRequest } from "../../assets";
import "./Layout.css";
const NavbarCards = (props) => {
  console.log(props);
  return (
    <div className="cards common-border d-flex gap-3 px-3 ">
      <div className="icon-background">
        <img className="icon" src={props.item.icon}></img>
      </div>
      <div className="pt-3">
        <h4 className="call-type mb-0">{props.item.title}</h4>
        <p className="price">+{props.item.share}%</p>
      </div>
      <h3 className="number">{props.item.value}</h3>
    </div>
  );
};
export default NavbarCards;
