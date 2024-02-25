import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  useMarkerRef,
  Marker,
} from "@vis.gl/react-google-maps";
import { ambulancelocate, logo } from "../../assets";

const MapComponent2 = () => {
  const [markerRef, marker] = useMarkerRef();
  const locations = [
    { id: 1, lat: 53.54, lng: 10 },
    { id: 2, lat: 21.144929014553384, lng: 79.1068667807851 },
    // Add more locations as needed
  ];
  const markers = () => {
    return (
      //   <AdvancedMarker position={{ lat: 53.54, lng: 10 }}>
      //     <img
      //       src={ambulancelocate}
      //       alt="Custom Marker"
      //       style={{ width: "32px", height: "32px" }} // Set the size of your image
      //     />
      //   </AdvancedMarker>
      locations.map((obj, index) => {
        return (
          <Marker
            ref={markerRef}
            key={i}
            position={{ lat: obj.lat, lng: obj.lng }}
            animation={google.maps.Animation.DROP}
            draggable={true}
          />
        );
      })
    );
  };
  return (
    <APIProvider apiKey={"AIzaSyCCeRvK-UDV4g__w4tx3HXyrTQ92V6emMY"}>
      <Map
        center={{ lat: 21.149918163928497, lng: 78.98599731639877 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"0NJaEQ3hremaHvggUtD4"}
      >
        <AdvancedMarker position={{ lat: 53.54, lng: 10 }}>
          <img
            src={ambulancelocate}
            alt="Custom Marker"
            style={{ width: "32px", height: "32px" }} // Set the size of your image
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default MapComponent2;
