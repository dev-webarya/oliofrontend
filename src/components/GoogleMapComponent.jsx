import React, { useEffect, useRef, memo } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = "pk.eyJ1IjoiZGV2d2ViYXJ5YSIsImEiOiJjbWdjYW9yeGgxOGhnMm1yMDNsdDJhMjBkIn0.htYMeq9-YlH8szavs0yA3w";

const MapboxAutocomplete = memo(({ label = "Search location...", onSelect }) => {
    const containerRef = useRef(null);
    const geocoderRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Prevent duplicate creation
        if (geocoderRef.current) return;

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            placeholder: label,
            marker: false,
            types: "place,region,locality,address",
            proximity: { longitude: 77.209, latitude: 28.6139 },
        });

        geocoder.addTo(containerRef.current);
        geocoderRef.current = geocoder;

        geocoder.on("result", (e) => {
            if (e && e.result) {
                const { place_name, center } = e.result;
                onSelect?.({
                    name: place_name,
                    lat: center[1],
                    lng: center[0],
                });
            }
        });

        return () => {
            try {
                geocoder.off("result");
                geocoder.clear();
            } catch (e) { }
            if (containerRef.current) containerRef.current.innerHTML = "";
            geocoderRef.current = null;
        };
    }, [label, onSelect]);

    return (
        <div
            ref={containerRef}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "4px",
                marginBottom: "12px",
            }}
        />
    );
});

export default MapboxAutocomplete;
