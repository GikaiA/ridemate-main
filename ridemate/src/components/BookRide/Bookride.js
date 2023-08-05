import React, { useState, useEffect } from "react";
import "./BookRide.css";
import { db } from "../firebase"; // Import the getFirestore function
import {firestore} from '.firebaseConfig';
import mapboxgl from "mapbox-gl";
import Navbar from "../Navbar/Navbar";


const BookRideForm =() => {
  const[pickupLocation,setPickupLocation] = useState('');
  const[destination,setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection('BookRide').add ({
      pickupLocation,
      destination,
      timestamp: new Date(),
    });
    setPickupLocation('');
    setPickupLocation('');
  };



//function BookRide() {
  // const [location, setLocation] = useState("");

  // // const firestore = getFirestore(); // Get the Firestore instance

  // const handleRequest = () => {
  //   if (location.trim() !== "") {
  //     // Save the ride request to Firestore
  //     db.collection("rideRequests").add({
  //       location: location.trim(),
  //       timestamp: new Date(),
  //     });
  //     setLocation("");
  //   }
  // };

  // mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxsbzIxIiwiYSI6ImNsa2NsdWYzMzBoYnozZHBqOGc1YXlkOWcifQ.TZ9pEPeO8mgXFGEnkkh8gA';

  // useEffect(() => {
  //   // Create a map instance
  //   const map = new mapboxgl.Map({
  //     container: 'map-container', // HTML element ID where the map will be displayed
  //     style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
  //     center: ["-80.1010 W, 26.3705 N"], // Center coordinates [longitude, latitude]
  //     zoom: 12, // Initial zoom level
  //   });

  //   // Add map controls, markers, and other map features as needed

  //   return () => {
  //     // Clean up the map instance on unmount
  //     map.remove();
  //   };
  // }, []);

  return (
    <div className="bookride-section">
      <Navbar/>
      <h2>Book a Ride</h2>
      <input
        type="text"
        // value={location}
        // onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location..."
        className="bookride-search"
      />
      <button className="bookride-button">Book Ride</button>
      <div id="map-container"></div>
    </div>
  );
}

export default BookRide;
