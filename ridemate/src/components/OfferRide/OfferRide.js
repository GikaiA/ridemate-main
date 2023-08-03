import React from 'react'
import "./OfferRide.css";


const OfferRide = () => {
  const driverData = {
    name: "John Doe",
    status: "Active",
    joinLink: "#",
  };


  return (
 <div className="container">
      <div className="rectangle">
        <div className="info">
          <div className="profile-image"></div>
          <div className="driver-info">
            <p>{driverData.name}</p>
            <p>Status: {driverData.status}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="status-btn">{driverData.status}</button>
          <a href={driverData.joinLink} className="join-btn">
            Join
          </a>
        </div>
      </div>

      {/* Duplicate the rectangle */}
      <div className="rectangle">
        <div className="info">
          <div className="profile-image"></div>
          <div className="driver-info">
            <p>{driverData.name}</p>
            <p>Status: {driverData.status}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="status-btn">{driverData.status}</button>
          <a href={driverData.joinLink} className="join-btn">
            Join
          </a>
        </div>
      </div>
    </div>
  );
 };

export default OfferRide
