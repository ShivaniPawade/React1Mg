import React, { useEffect, useState } from "react";
import {
  ambulanceImage,
  call,
  callRequest,
  mapview,
  callDispatched,
  callDeclined,
  callCompleted,
} from "../../../assets";
import NavbarCards from "../../layout/NavbarCards";
import { Link } from "react-router-dom";
import PaginationComponent from "../../commonComponents/DoubleArrowPagination";
import PieChartWithCenterLabel from "../../commonComponents/Chart";
import Greetings from "../../commonComponents/Greetings";
import RecentNews from "../../commonComponents/RecentNews";
import NormalPagination from "../../commonComponents/NormalPagination";
import { POSTAPI } from "../../../api/Index";
import { BASEURL } from "../../../constant";

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
      latLong: "28.67 N - 77.06 E",
    },
    {
      srNo: 2,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E",
    },
    {
      srNo: 3,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E",
    },
    {
      srNo: 4,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E",
    },
    {
      srNo: 5,
      name: "Amit J.",
      mobileNo: 919988776655,
      ageGender: "65/Male",
      date: 20 - 12 - 2023,
      time: 1455,
      emergency: "Chest Pain",
      latLong: "28.67 N - 77.06 E",
    },
  ]);

  const [auditData, setauditData] = useState([
    {
      sNo: 2,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C",
    },
    {
      sNo: 3,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C",
    },
    {
      sNo: 4,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C",
    },
    {
      sNo: 5,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C",
    },
    {
      sNo: 1,
      itemName: "AMBU Bag (Adult)",
      quantity: 1,
      inspectionNo: "IN-33646",
      inspectionDate: 10 - 11 - 2023,
      images: "view",
      status: "Satisfactory",
      inspect: "Sandeep C",
    },
  ]);
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
    },
  ]);
  const [records, setrecords] = useState({});
  useEffect(() => {
    recordData();
  }, []);

  const recordData = async () => {
    const data = {
      token: localStorage.getItem("usertoken"),
    };
    POSTAPI(
      BASEURL + "partner/mg/GetMGDashboard",
      data,
      (success) => {
        const extractedValues = Object.values(success.data[0]);
        const newCards = {...cards}
        newCards.forEach((item, index) => {
          item.value = extractedValues[index];
        });
        setcards(newCards)
      },
      (error) => {
        console.log(error);
        setrecords({});
      }
    );
  };
  return (
    <div className="dashboard ">
      <div className="d-flex justify-content-between py-1">
        {cards.map((item) => {
          return (
            <div className="">
              <NavbarCards item={item} />
            </div>
          );
        })}
      </div>

      {/* ----------------  greeting start  ---------------- */}
      <div className="d-flex gap-4 mt-3">
        <Greetings />
        <RecentNews />
      </div>
      {/* ------------------  greeting end ------------------ */}

      {/* ----------  map view start ------------ */}
      <div className="map-view common-border d-flex mt-3">
        <div>
          <h2 className="common-heading pt-4">Map View</h2>
          <p className="map-information">
            Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus
            nulla iaculis sed molestie. Nulla dui in eget non fusce tortor
            pellentesque. Est posuere cursus eleifend purus nibh ac. Amet
            aliquet sapien senectus tempor vulputate urna et mus.
          </p>
          <Link className="map-link " to={"/map-live-view"}>
            View Live Map
          </Link>
        </div>
        <img src={mapview} alt="image"></img>
      </div>
      {/* ----------  map view end ------------ */}

      {/* ----------- recent call details start ----------- */}
      <div className="  mt-3 d-md-flex gap-3">
        <div className="call-details common-border">
          <div className="d-flex pt-3 pb-2 ">
            <h2 className="common-heading me-auto">Recent Call Details</h2>
            <Link className="view-details text-decoration-none pt-2 pe-2">
              View All
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th className="th-details">S. No</th>
                <th className="th-details">Name</th>
                <th className="th-details">Mobile No.</th>
                <th className="th-details">Age/Gender</th>
                <th className="th-details">Date</th>
                <th className="th-details">Time</th>
                <th className="th-details">Emergency Type</th>
                <th className="th-details"> Lat/Long</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => {
                return (
                  <tr key={user.srNo}>
                    <td className="sr-border td-details">1</td>
                    <td className="td-details">Amit J.</td>
                    <td className="td-details">919988776655</td>
                    <td className="td-details">65/Male</td>
                    <td className="td-details">20-12-2023</td>
                    <td className="td-details">1455</td>
                    <td className="td-details">Chest Pain</td>
                    <td className="td-details">28.67 N-77.06 E</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PaginationComponent />
        </div>
        <div className="graph common-border">
          <h2 className="text-center pt-1 turn-around">Turn Around Time</h2>
          <PieChartWithCenterLabel />
        </div>
      </div>

      {/* ----------- recent call details  end----------- */}

      {/* --------- audit window  -------- */}
      <div className="common-border mt-3 audit-window">
        <div className="d-flex pt-3 pb-2 ">
          <h2 className="common-heading me-auto">Audit Window</h2>
          <Link className="view-details text-decoration-none pt-2 pe-2">
            View All
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>S. No</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Inspection No.</th>
              <th>Inspection Date</th>
              <th>Images</th>
              <th>Status</th>
              <th>Inspector</th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((data) => {
              return (
                <tr key={data.sNo}>
                  <td>1</td>
                  <td>AMBU Bag (Adult)</td>
                  <td>1</td>
                  <td>IN-33646</td>
                  <td>10-11-2023</td>
                  <td>
                    <Link className="text-decoration-none ">view</Link>
                  </td>
                  <td className="text-success">Satisfactory</td>
                  <td>Sandeep C</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end pt-5 pb-2">
          <NormalPagination />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
