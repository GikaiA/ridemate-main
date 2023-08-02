import React from "react";
import "./Homepage.css";
import ridesharedriver from "../images/rideshare-driver-handsome.png";
import rideshareuser from "../images/rideshare-user.png";
import faulogo from "../images/fau-logo.png";
import pbsc from "../images/pbsc-logo.png";

const emailLinks = {
    "Antonio Crissy": "mailto:acroissy2019@fau.edu",
    "Ameer Khan": "mailto:akhan2019@fau.edu",
    "Daniela Herrera": "mailto:dherrera2022@fau.edu",
    "Gikai Andrews": "mailto:gandrews2020@fau.edu",
    "Jerusha Stewart": "mailto:jerushastewa2022@fau.edu",
  };

function Homepage() {
  return (
    <div className="whole-page">
      <div className="header-section">
        <p className="intro-text">
          <strong>RideMate</strong> offers a special level of flexibility for its users. Whether
          you need a ride from your location to any of our partnered
          universities or wish to provide transportation.
        </p>
        <img src={ridesharedriver} alt="rideshare-driver" className="driver" />
      </div>
      
      <div id='safety' className="safety-section">
        <h1 className="safety-title">Safety</h1>
        
        <div className="statistics-section">
          <img src={rideshareuser} className="safety-picture" alt="rideshare-user" />
          <div className='text1'>
            <p id='text'>
              Between <strong>2017</strong> and <strong>2019</strong>, Lyft received 10 reports of fatal physical
              assaults and <strong>1,096</strong> reports of sexual assault
            </p>
          </div>

          <div  className='text2'>
            <p id='text'>Average Uber prices soared by <strong>92%</strong> from <strong>2018</strong> to <strong>2021</strong>.</p>
          </div>
          
          <div className='text3'>
            <p id='text'>
              Americans who make <strong>$75,000</strong> a year are twice as likely as those
              earning less than <strong>$30,000</strong> per year to have used ridesharing services
            </p>
          </div>

        </div>

      </div>
      
      <div className="school-section">
        <h1 className="school-title" id="schools">Schools That We Work With</h1>

        <div className="school-list">

          <div className="logo-container">
          <img src={faulogo} className="fau-logo" alt="fau-logo" />
          </div>

          <div>
            <p id='text'><strong>Florida Atlantic Univerity</strong></p>
            <p id='text'><strong>Palm Beach State College</strong></p>
            <p id='text'><strong>Florida Atlantic University High School</strong></p>
          </div>
          
          <div className="logo-container">
            <img src={pbsc} className="pbsc-logo" alt="pbsc-logo" />
          </div>

        </div>
      </div>

       <div className="footer-section">
   <footer class="footer">
    <div className= "container">
      <div className="row">

        <div className= "footer-col">
          <h1 className="footer-title"> Developers </h1>
          <div className="contact-footer-column">
           

            <p className="dev-name" onClick={() => window.open(emailLinks["Antonio Crissy"])}>Antonio Crissy</p>
            <p className="dev-name" onClick={() => window.open(emailLinks["Ameer Khan"])}>Ameer Khan</p>
            <p className="dev-name" onClick={() => window.open(emailLinks["Daniela Herrera"])}>Daniela Herrera</p>
            <p className="dev-name" onClick={() => window.open(emailLinks["Gikai Andrews"])}>Gikai Andrews</p>
            <p className="dev-name" onClick={() => window.open(emailLinks["Jerusha Stewart"])}>Jerusha Stewart</p>

          </div>
          </div>

          <div className= "footer-col">
          <h1 className="footer-title"> Fau </h1>
          <div className="contact-footer-column">
           

            <p className="dev-name" ><a href="https://www.fau.edu/">Website</a></p>

          </div>
          </div>

    </div>
    </div>
        </footer>
      
    </div>
    </div>
  );
}

export default Homepage;
