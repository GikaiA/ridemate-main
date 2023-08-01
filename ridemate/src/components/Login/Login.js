import React, { useState } from "react";
import "./Login.css";
import rideshareuser from "../images/rideshare-user.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to the dashboard component after successful login
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="login-page">
      <h1>
        <a href="/">RideMate</a>
      </h1>
      <div className="image-container">
        <img className="floating-image" src={rideshareuser} alt="Floating" />
      </div>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username" className="label-name">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label-name">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="button-group">
            <button className="login-button" >
              Login
            </button>{" "}
          </div>
          <div className="create-account-text">
            <p className="create-account-link">
              If you want to make an account click
              <a href="/register" className="signup-button">
              here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;