import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function ParkMap() {
  const center = [19.0760, 72.8777];

  const locations = [
    { id: 1, position: [19.0760, 72.8777], label: 'Mumbai' },
    { id: 2, position: [18.5204, 73.8567], label: 'Pune' },
    { id: 3, position: [21.1458, 79.0882], label: 'Nagpur' },
  ];

  return (
    <div className="park-map-wrapper">
      <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: '70vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(loc => (
          <Marker key={loc.id} position={loc.position}>
            <Popup>{loc.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ParkMap;