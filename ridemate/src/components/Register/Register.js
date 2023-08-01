import React from "react";
import "./Register.css";
import { useState } from "react";
import {createUserWithEmailAndPassword}from "firebase/auth";
import {auth} from "../firebase";
import { useNavigate } from "react-router-dom";
import ridematePhone from "../images/ridematePhone.png";
import 'firebase/auth';
import 'firebase/analytics';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // const isValidEduEmail = (email) => {
  //   // Add your list of valid edu email domains here
  //   const validEduDomains = ["bc.edu", "fau.edu", "pbsc.edu"];
  //   const domain = email.split("@")[1];
  //   return validEduDomains.includes(domain);
  // };

  const handleRegister = async (e) => {
    e.preventDefault();

    // if (!isValidEduEmail(email)) {
    //   console.log("Please provide a valid edu email address.");
    //   return;
    // }

    try{
      await createUserWithEmailAndPassword(auth, email, password);

      await auth.currentUser.updateProfile({
        displayName: `${firstName} ${lastName}`,
      })
      navigate("/dashboard");
    }catch (error) {
      console.error("Error creating user:", error)
    }
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
              <form className="register-form" onSubmit={handleRegister}>
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
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
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
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
              <button className="submit-button">
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