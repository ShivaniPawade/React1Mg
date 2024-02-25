import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MapComponent3 extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default MapComponent3;
