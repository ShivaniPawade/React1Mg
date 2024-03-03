import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./auth/Login";
import { Routes, Route , Outlet} from "react-router-dom";
import HomeCards from "./components/dashboard/Home/HomeCards";
import Layout from "./components/layout/Layout";
import HomeComponent from "./components/dashboard/Home/HomeComponent";
import MapComponent4 from "./components/maps/MapComponent4";
import Employees from "./components/hrManagement/Employees";
import AmbulanceInformation from "./components/maps/AmbulanceInformation";
import MapComponent3 from "./components/maps/MapComponent3";
import MapComponent2 from "./components/maps/MapComponent2";
import MapComponent from "./components/maps/MapComponent";
import CommonMaps from "./components/maps/CommonMaps";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {/* Child routes rendered inside the Outlet */}
          /* <Route path="/" element={<HomeComponent />} />
          <Route path="/1MG Dashboard" element={<HomeComponent />} /> 
          {/* <Route path="/map-live-view" element={<MapComponent/>} /> */}
          <Route path="/map-live-view" element={<CommonMaps/>} />
          <Route path="/employeedashboard" element={<Employees/>} />
          <Route path="/ambulance-information" element={<AmbulanceInformation/>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
