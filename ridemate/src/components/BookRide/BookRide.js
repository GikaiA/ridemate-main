import React, { useState, useEffect } from "react";
import "./BookRide.css";
import mapboxgl from "mapbox-gl";
import Navbar from "../Navbar/Navbar";
import { db } from "../firebase"; // Import the db instance

const BookRideForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("BookRide").add({
      pickupLocation,
      destination,
      timestamp: new Date(),
    });
    setPickupLocation("");
    setDestination("");
  };

  return (
    <form onSubmit={handleSubmit} className="bookride-section">
      <input
        type="text"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
        placeholder="Enter pickup location..."
        className="bookride-search"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination..."
        className="destination-search"
      />
      <button type="submit" className="bookride-button">Book Ride</button>
    </form>
  );
};

function BookRide() {
  const [location, setLocation] = useState("");

  const handleRequest = () => {
    if (location.trim() !== "") {
      db.collection("rideRequests").add({
        location: location.trim(),
        timestamp: new Date(),
      });
      setLocation("");
    }
  };

  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxsbzIxIiwiYSI6ImNsa2NsdWYzMzBoYnozZHBqOGc1YXlkOWcifQ.TZ9pEPeO8mgXFGEnkkh8gA';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-80.1010, 26.3705],
      zoom: 12,
    });

    const handleWindowResize = () => {
      map.resize();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      map.remove();
    };
  }, []);

  return (
    <div className="bookride-section">
      {/* <Navbar /> */}
      <h2 className="bookride-title">Book a Ride</h2>
      <div className="search-container">
        <BookRideForm />
      </div>
      <div id="map-container"></div>
    </div>
  );
}

export default BookRide;