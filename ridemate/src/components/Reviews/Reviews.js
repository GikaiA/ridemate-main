import React, { useEffect } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import sara from "../images/sara.jpg";
import { ChangeEvent, useState } from "react";

function Reviews() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="page">
      <div className="column left">
        <img className="profile-image" src={sara} />
        <p id="location-text">
          {" "}
          <i class="fa-solid fa-location-dot fa-sm"></i> Greenacres{" "}
        </p>

        <div className="tabs-container">
          <div className="button-container">
            <a href="/dashboard" className="dashboard-button" id="medium-text">
              <i class="fa-solid fa-user"></i> Dashboard
            </a>
          </div>
          <div className="button-container">
            <a href="/book-ride" className="book-button" id="medium-text">
              <i class="fa-solid fa-circle-check fa-sm"></i> Book Ride
            </a>
          </div>

          <div className="button-container">
            <a href="/offer-ride" className="offer-button" id="medium-text">
              <i class="fa-solid fa-hand-holding-hand"></i> Offer Ride
            </a>
          </div>

          <div className="button-container">
            <a href="/future-rides" className="future-button" id="medium-text">
              <i class="fa-solid fa-car"></i> Future Rides
            </a>
          </div>

          <div className="button-container">
            <a href="/reviews" className="reviews-button" id="medium-text">
              <i class="fa-solid fa-star"></i> Reviews
            </a>
          </div>
        </div>
      </div>

      <div className="column middle">
        <h1 id="large-text">Reviews</h1>
        <div className="input-container">
          <div>
            <input
              type="text"
              placeholder="How was your carpolling experience? "
              onChange={handleChange}
              value={inputText}
            />
            <p id="input-text">{inputText}</p>
          </div>
          <div>
            <Link to="">
              <button className="post-button">Post !</button>
            </Link>
          </div>
        </div>

        <div className="text-container">
          <p id="medium-text">Laura Gutierrez</p> <p>08/05/2022</p>
          <p id="small-text">
            What an incredible ride with Sara! She was absolutely wonderful,
            friendly, and punctual. She provided a comfortable and safe journey.
          </p>
        </div>

        <div className="text-container">
          <p id="medium-text">Juan Sandoval</p> <p>07/25/2022</p>
          <p id="small-text">
            I had a great eperience riding with Sara. She is friendly and
            welcoming. We had a nice chat along the way, making the ride feel
            like catching up with an old friend. I highly recommend Sara for
            anyone looking for a reliable and delightful ride.{" "}
          </p>
        </div>
        <div className="text-container">
          <p id="medium-text">Mary Lozano</p> <p>06/30/2022</p>
          <p id="small-text">
            I had the best morning commute ever with Sara as my driver! Her
            positive energy and great music selection made the ride so
            enjoyable. I couldn't have asked for a better start to my day. Thank
            you, Sara :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
