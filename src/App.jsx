
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./auth/Login";
import { Routes, Route , Outlet} from "react-router-dom";
import HomeCards from "./components/dashboard/Home/HomeCards";
import Layout from "./components/layout/Layout";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {/* Child routes rendered inside the Outlet */}
          <Route path="/" element={<HomeCards />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
