"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MyMap({ lat, lng }: { lat: number; lng: number }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  });

  if (!isLoaded) return <div>Chargement...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat, lng }}
      zoom={15}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}
