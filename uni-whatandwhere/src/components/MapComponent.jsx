import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class MapComponent {
  render() {
    const position = [51.505, -0.09]; // Initial coordinates for the map

    return (
      <Map center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A sample popup with some information.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
