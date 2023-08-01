import React from "react";
import "./Register.css";
import { useState } from "react";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import {getAuth,createUserWithEmailAndPassword}from "firebase/auth";
//import { initializeApp } from "firebase/app";
// import { Auth } from "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import ridematePhone from "../images/ridematePhone.png";
import 'firebase/auth';
import 'firebase/analytics';

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEduEmail = (email) => {
    // Add your list of valid edu email domains here
    const validEduDomains = ["bc.edu", "fau.edu", "pbsc.edu"];
    const domain = email.split("@")[1];
    return validEduDomains.includes(domain);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEduEmail(email)) {
      console.log("Please provide a valid edu email address.");
      return;
    }

    const auth =getAuth();

    try{
      await createUserWithEmailAndPassword(auth,email,password);
      navigate("/dashboard");

    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  
    // await createUserWithEmailAndPassword(Auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     navigate("/dashboard");
    //     //....
    //   })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorCode, errorMessage);
      // });
  };



  return (
    <div className="page">
      <div class="row">
        <div className="container">
          <div>
            <img class="column-left" src={ridematePhone} alt="phone" />
          </div>

          <div class="column-right">
            <div className="form-container">
              <h1 id="title">Register</h1>
              <form className="register-form" onSubmit={onSubmit}>
                <p className="register-info">
                  Please fill this form to create an account.
                </p>
                <div className="label-container">
                  <label for="First Name" className="register-label">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="input-field-name"
                    placeholder="Type your first name"
                    name="first name"
                    required
                  />

                  <label for="First Name" className="register-label">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="input-field-name"
                    placeholder="Type your last name"
                    name="last name"
                    required
                  />
                </div>

                <div className="label-container">
                  <label for="Last Name" className="register-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    className="input-field-register"
                    placeholder="Type your email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="label-container">
                  <label for="First Name" className="register-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="input-field-register"
                    placeholder="Type your password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="label-container">
                  <label for="First Name" className="register-label">
                    <b>Re-Enter Password</b>
                  </label>
                  <input
                    type="text"
                    className="input-field-register"
                    placeholder="Type your password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              <button className="submit-button" onClick={onSubmit}>
                Create Account
              </button>
              <div className="link-to-register">
                <p className="register-info">
                  If you have an account, click{" "}
                  <a href="/login" className="here">
                    {" "}
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;