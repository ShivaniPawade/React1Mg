import React, { Component, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "@googlemaps/markerclustererplus";

function Marker() {
  return <i className="fa fa-map-marker fa-3x text-danger" />;
}

export default function MapComponent() {
  let markersArray = [];
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let coordinates = [
    {
      lat: 53.1408926,
      lng: -3.3684601,
    },
    { lat: 19.2025, lng: 76.220521 },
    {
      lat: 40.8532681,
      lng: -8.4095847,
    },
    {
      lat: 52.3677552,
      lng: 4.9066119,
    },
    {
      lat: 54.66641,
      lng: 25.2746179,
    },
    {
      lat: 52.3260381,
      lng: 6.6500213,
    },
    { lat: -33.9248685, lng: 18.4240553 },
    {
      lat: 40.3212191,
      lng: -78.3466645,
    },
    {
      lat: 52.014493,
      lng: -0.6757654,
    },
    {
      lat: 34.0006293,
      lng: -83.9092829,
    },
    {
      lat: 33.2822878,
      lng: -117.185294,
    },
    {
      lat: 42.3149367,
      lng: -83.0363633,
    },
    {
      lat: -6.8226625,
      lng: 39.3024465,
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    script.async = true;
    document.body.appendChild(script);
  });

  const setGoogleMapRef = (map, maps) => {
    let googleMapRef = map;
    let googleRef = maps;
    const infoWindow = new googleRef.InfoWindow({
      content: "<p>Hello</p>",
    });
    let markers =
      coordinates &&
      coordinates.map((marker, index) => {
        const refMarker = new googleRef.Marker({
          position: marker,
          label: labels[index % labels.length],
          title: "Car",
        });

        // googleRef.event.addEventListener(refMarker, 'click', () => {
        //   infoWindow.open(map, googleMapRef)
        // })

        // refMarker.addEventListener('click', () => {
        //   infoWindow.open(map, refMarker)
        // })

        return refMarker;
      });

    let markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "/marker_images/m",
      minimumClusterSize: 4,
    });
  };

  return (
    <div className="app" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDfnY7GcBdHHFQTxRCSJGR-AGUEUnMBfqo" }}
        defaultCenter={{ lat: 54.6872, lng: 25.2797 }}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => setGoogleMapRef(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
