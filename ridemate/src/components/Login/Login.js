import React, { useEffect, useState } from "react";
import "./Login.css";
import rideshareuser from "../images/rideshare-user.png";
import { getAuth, signInWithEmailAndPassword, onIdTokenChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User logged in successfully, perform any additional actions here
        const user = userCredential.user;
        console.log('Logged in user:', user);

        // Redirect the user to the dashboard or another appropriate route
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle login error
        console.error('Error logging in user:', error.message);
      });
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
            <button className="login-button">
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
