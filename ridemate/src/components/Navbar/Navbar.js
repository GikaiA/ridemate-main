import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png"; 
import { getAuth, signOut, onIdTokenChanged } from "firebase/auth";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

    // Check user authentication state
    const auth = getAuth();
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  window.addEventListener("resize", showButton);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="logo" src={logo} alt="Logo" />
        <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
          RideMate
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* Conditionally render "Schools" and "Safety" sections */}
          {!isLoggedIn && (
            <>
              {location.pathname === '/' && (
                <li className="nav-item">
                  <Link to="/#safety" className="nav-links" onClick={closeMobileMenu}>
                    Safety
                  </Link>
                </li>
              )}

              {location.pathname === '/' && (
                <li className="nav-item">
                  <Link to="/#schools" className="nav-links" onClick={closeMobileMenu}>
                    Schools
                  </Link>
                </li>
              )}
            </>
          )}

{isLoggedIn && (
          <>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/future-rides" className="nav-links" onClick={closeMobileMenu}>
                Future Rides
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-links" onClick={closeMobileMenu}>
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/offer-ride" className="nav-links" onClick={closeMobileMenu}>
                Offer Ride
              </Link>
            </li>
          </>
        )}
        </ul>

        {isLoggedIn ? (
          <button className="sign-out-button" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <>
            {location.pathname !== '/register' && location.pathname !== '/login' && (
              <Link to="/register">
                <button className="sign-up-button">SIGN UP</button>
              </Link>
            )}

            {location.pathname !== '/register' && location.pathname !== '/login' && (
              <Link to="/login">
                <button className="login-btn">LOGIN</button>
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

