"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type { MapContainerProps, TileLayerProps } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
// Typage strict du composant
interface MyMapProps {
  latitude: number;
  longitude: number;
}
let DefaultIcon = L.icon({
  iconUrl: icon as unknown as string,
  shadowUrl: iconShadow as unknown as string,
  iconSize: [25, 41], // Taille de l'icône
  iconAnchor: [12, 41], // Point d'ancrage (bas au centre)
  popupAnchor: [1, -34], // Ancre pour les popups
  shadowSize: [41, 41], // Taille de l'ombre
});

L.Marker.prototype.options.icon = DefaultIcon;

// Typage strict des imports dynamiques
const MapContainer = dynamic<MapContainerProps>(
  () =>
    import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic<TileLayerProps>(
  () =>
    import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () =>
    import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () =>
    import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function MyMap({ latitude, longitude }: MyMapProps) {
  const position: LatLngExpression = [latitude, longitude];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false} className="z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker position={position}>
          <Popup>Position choisie</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
