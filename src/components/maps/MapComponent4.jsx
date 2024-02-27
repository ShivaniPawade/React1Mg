import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

const MapComponent4 = () => {
    const [data, setdata] = useState([
        {
          "name": "New York City",
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        {
          "name": "Los Angeles",
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        {
          "name": "London",
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        {
          "name": "Tokyo",
          "latitude": 35.6895,
          "longitude": 139.6917
        },
        {
          "name": "Sydney",
          "latitude": -33.8688,
          "longitude": 151.2093
        }
      ]
      )
  return (
    <div>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={20}>
        {/* {data.map((map,index) => {
          <Marker key={index} width={50} anchor={[map.latitude, map.longitude]} />;
        })} */}
        <Marker  width={50} anchor={[50.879, 4.6997]}  onClick={() => setHue(hue + 20)} />
        <Marker  width={50} anchor={[50.879, 5.322]}  onClick={() => setHue(hue + 20)} />
        <Marker  width={50} anchor={[50.879, 4.6997]}  onClick={() => setHue(hue + 20)} />
      </Map>
    </div>
  );
};

export default MapComponent4;
