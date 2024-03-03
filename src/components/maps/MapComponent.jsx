// import React, { Component, useEffect } from "react";
// import GoogleMapReact from "google-map-react";
// import MarkerClusterer from "@googlemaps/markerclustererplus";

// function Marker() {
//   return <i className="fa fa-map-marker fa-3x text-danger" />;
// }

// export default function MapComponent() {
//   let markersArray = [];
//   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let coordinates = [
//     {
//       lat: 53.1408926,
//       lng: -3.3684601,
//     },
//     { lat: 19.2025, lng: 76.220521 },
//     {
//       lat: 40.8532681,
//       lng: -8.4095847,
//     },
//     {
//       lat: 52.3677552,
//       lng: 4.9066119,
//     },
//     {
//       lat: 54.66641,
//       lng: 25.2746179,
//     },
//     {
//       lat: 52.3260381,
//       lng: 6.6500213,
//     },
//     { lat: -33.9248685, lng: 18.4240553 },
//     {
//       lat: 40.3212191,
//       lng: -78.3466645,
//     },
//     {
//       lat: 52.014493,
//       lng: -0.6757654,
//     },
//     {
//       lat: 34.0006293,
//       lng: -83.9092829,
//     },
//     {
//       lat: 33.2822878,
//       lng: -117.185294,
//     },
//     {
//       lat: 42.3149367,
//       lng: -83.0363633,
//     },
//     {
//       lat: -6.8226625,
//       lng: 39.3024465,
//     },
//   ];

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
//     script.async = true;
//     document.body.appendChild(script);
//   });

//   const setGoogleMapRef = (map, maps) => {
//     let googleMapRef = map;
//     let googleRef = maps;
//     const infoWindow = new googleRef.InfoWindow({
//       content: "<p>Hello</p>",
//     });
//     let markers =
//       coordinates &&
//       coordinates.map((marker, index) => {
//         const refMarker = new googleRef.Marker({
//           position: marker,
//           label: labels[index % labels.length],
//           title: "Car",
//         });

//         // googleRef.event.addEventListener(refMarker, 'click', () => {
//         //   infoWindow.open(map, googleMapRef)
//         // })

//         // refMarker.addEventListener('click', () => {
//         //   infoWindow.open(map, refMarker)
//         // })

//         return refMarker;
//       });

//     let markerCluster = new MarkerClusterer(map, markers, {
//       imagePath: "/marker_images/m",
//       minimumClusterSize: 4,
//     });
//   };

//   return (
//     <div className="app" style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDfnY7GcBdHHFQTxRCSJGR-AGUEUnMBfqo" }}
//         defaultCenter={{ lat: 54.6872, lng: 25.2797 }}
//         defaultZoom={1}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map, maps }) => setGoogleMapRef(map, maps)}
//       ></GoogleMapReact>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import { ambulance } from "../../assets";
import AmbulanceInformation from "./AmbulanceInformation";

export default function MapComponent(props) {
  let coordinates = [
    { lat: 53.1408926, lng: -3.3684601 },
    { lat: 19.2025, lng: 76.220521 },
    { lat: 40.8532681, lng: -8.4095847 },
    { lat: 52.3677552, lng: 4.9066119 },
    { lat: 54.66641, lng: 25.2746179 },
    { lat: 52.3260381, lng: 6.6500213 },
    { lat: -33.9248685, lng: 18.4240553 },
    { lat: 40.3212191, lng: -78.3466645 },
    { lat: 52.014493, lng: -0.6757654 },
    { lat: 34.0006293, lng: -83.9092829 },
    { lat: 33.2822878, lng: -117.185294 },
    { lat: 42.3149367, lng: -83.0363633 },
    { lat: -6.8226625, lng: 39.3024465 },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const setGoogleMapRef = (map, maps) => {
    let googleRef = maps;

    let markers =
      coordinates &&
      coordinates.map((marker, index) => {
        const refMarker = new googleRef.Marker({
          position: marker,
          icon: {
            // url: "https://via.placeholder.com/40", // Placeholder image for testing
            url: "data:image/png;base64,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",
            scaledSize: new googleRef.Size(40, 40),
          },
          title: "Ambulance",
        });
        refMarker.addListener("click", () => {
          // Handle click event here
          console.log("Marker clicked:", marker);
          props.setcurrentMarker(marker);
        });

        return refMarker;
      });

    let markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "/marker_images/m",
      minimumClusterSize: 4,
    });
  };

  const handleMapClick = () => {
    props.setcurrentMarker(marker);
  };
  return (
    <div className="app" style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDfnY7GcBdHHFQTxRCSJGR-AGUEUnMBfqo" }} // Replace with your API key
        defaultCenter={{ lat: 54.6872, lng: 25.2797 }}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => setGoogleMapRef(map, maps)}
        onClick={handleMapClick}
      ></GoogleMapReact>
      
    </div>
  );
}
