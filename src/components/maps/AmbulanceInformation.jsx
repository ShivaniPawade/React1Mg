import React, { useState } from "react";
import "./map.css";
import {
  Close,
  FluentLocation,
  LogoHanuman,
  MapAmbulance,
  Share,
  Staff,
  Star,
} from "../../assets";
import { Link } from "react-router-dom";
const AmbulanceInformation = (props) => {
  const [data, setdata] = useState([
    {
      srNO: 1,
      items: "Oxygen",
      quantity: "2 Cylinders = 40KG",
      status: "Working",
    },
    {
      srNO: 2,
      items: "Oxygen",
      quantity: "2 Pieces",
      status: "Working",
    },
    {
      srNO: 3,
      items: "Oxygen",
      quantity: "30 Pieces",
      status: "Working",
    },
    {
      srNO: 4,
      items: "Oxygen",
      quantity: " 2 Pieces",
      status: "Working",
    },
    {
      srNO: 5,
      items: "Oxygen",
      quantity: "2 Pieces",
      status: "Working",
    },
  ]);
  return (
    <div className="ambulance-information">
      <div className="d-flex justify-content-between map-location-background">
        <div className="logo-background">
          <img className="logo-map" src={LogoHanuman}></img>
        </div>
        <div className="d-flex align-items-center justify-content-center  gap-2">
          <img src={FluentLocation}></img>
          <div>
            <h3 className="location-heading1 mb-0">28.47 N, 77.04 E</h3>
            <h4 className="location-heading2 mb-0">Sector 17, Gurgaon</h4>
          </div>
        </div>
      </div>
      {/* -------------- */}
    <div className="pt-0 p-3">
      <div className="d-flex  justify-content-between align-items-center  ">
        <h1 className="map-heading mb-0">Tempo Traveller Ambulance</h1>
        <div>
          <img src={Share}></img>
          <button className="btn" onClick={() => props.setcurrentMarker(null)}>
            <img src={Close} className=""></img>
          </button>
        </div>
      </div>
      <h2 className="vehicle">Reg No. - BH 05 DS 2451</h2>
      <h3 className="color-change vehicle ">Vehicle Model: 3350</h3>
      <div className="map-ambulance">
      <img className=" img" src={MapAmbulance}></img>
      </div>
      {/* --------------- */}
      <div className="staff  my-3 p-3">
        <h2 className="staff-details">Staff Details </h2>
        <div className="d-flex  ">
          <div className="staff-img">
            <img src={Staff} />
          </div>
          <div>
            <h2 className="staff-info ps-3 mb-0">Mr. Anil Singh</h2>
            <div className="d-flex ps-3 justify-content-between">
              <h3 className="staff-profession ">Driver</h3>
              <h3 className="staff-profession ">
                Ratings -
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </h3>
            </div>
          </div>
        </div>
        <div className="d-flex  ">
          <div className="staff-img">
            <img src={Staff} />
          </div>
          <div>
            <h2 className="staff-info ps-3 mb-0">Dr. Sunil Tyagi</h2>
            <div className="d-flex ps-3 justify-content-between">
              <h3 className="staff-profession ">Doctor</h3>
              <h3 className="staff-profession ">
                Ratings -
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </h3>
            </div>
          </div>
        </div>
        <div className="d-flex  ">
          <div className="staff-img">
            <img src={Staff} />
          </div>
          <div>
            <h2 className="staff-info ps-3 mb-0">Mr. Anil Singh</h2>
            <div className="d-flex ps-3 justify-content-between">
              <h3 className="staff-profession ">Nurse</h3>
              <h3 className="staff-profession ">
                Ratings -
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* ------------- equipment-list----------- */}
      <div className="equipment-list my-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="equipment-heading mb-0">Equipment List</h2>
          <Link className="view-all text-decoration-none ">View All</Link>
        </div>
        <table className="mt-1">
          <thead>
            <tr>
              <th className="etable-heading">Items</th>
              <th className="etable-heading">Quantity & Description</th>
              <th className="etable-heading">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td className="etable-heading td-color">
                    {item.srNO}.{item.items}
                  </td>
                  <td className="etable-heading td-color">{item.quantity}</td>
                  <td className="etable-heading td-color">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default AmbulanceInformation;
