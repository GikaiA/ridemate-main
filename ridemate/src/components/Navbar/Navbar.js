import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png"; 


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" src={logo}/>
            <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
              RideMate
            </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/safety" className="nav-links" onClick={closeMobileMenu} >
                <a href="#safety">Safety</a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/schools" className="nav-links" onClick={closeMobileMenu} >
                <a href="#schools">Schools</a>
              </Link>
            </li>
          </ul>
          {}

          <Link to="/register">
            <button className="sign-up-button">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;