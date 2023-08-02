import React, { useState, useEffect } from "react";
import "./Bookride.css";
import mapboxgl from "mapbox-gl"; // Import mapbox-gl library

function Bookride() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Initialize mapboxgl with your access token
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxsbzIxIiwiYSI6ImNsa2NsdWYzMzBoYnozZHBqOGc1YXlkOWcifQ.TZ9pEPeO8mgXFGEnkkh8gA';

    // Create a map instance
    const map = new mapboxgl.Map({
      container: 'map-container', // HTML element ID where the map will be displayed
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [-80.1010, 26.3705], // Center coordinates [longitude, latitude]
      zoom: 12, // Initial zoom level
    });

    // Clean up the map instance on unmount
    return () => {
      map.remove();
    };
  }, []);

  const handleRequest = () => {
    if (location.trim() !== "") {
      // Save the ride request to Firestore or perform any other desired action
      // Make sure you have the necessary code for Firestore properly set up
      // For now, let's just clear the location input
      setLocation("");
    }
  };

  return (
    <div>
      <h2>Book a Ride</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
      />
      <button onClick={handleRequest}>Book Ride</button>
      <div id="map-container" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
}

export default Bookride;
