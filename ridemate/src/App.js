import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import {getAuth, signOut} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import BookRide from './components/BookRide/BookRide';
import OfferRide from './components/OfferRide/OfferRide';
import FutureRides from './components/FutureRides/FutureRides';
import AccessForbidden from './components/AccessForbidden/AccessForbidden';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaTebJ87um1Aa8Pz1ky5YGo2phJeEbAbs",
  authDomain: "ridemate-pro.firebaseapp.com",
  projectId: "ridemate-pro",
  storageBucket: "ridemate-pro.appspot.com",
  messagingSenderId: "203618115131",
  appId: "1:203618115131:web:a54fafecefc7f3321e461e",
  measurementId: "G-0700GCBDG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

useEffect(() =>{
  const auth = getAuth(app);
signOut(auth)
  .then(() => {
    console.log('Signed out successfully');
  })
  .catch((error) => {
    console.error('Error signing out:', error);
  });
}, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
            <Navbar/>
            <Homepage/>
            </>
          }/>
          <Route exact path= 'access-forbidden' Component={AccessForbidden}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/login' Component={Login}/>
          <Route exact path='/dashboard' Component={Dashboard}/>
          <Route exact path='/book-ride' Component={BookRide}/>
          <Route exact path='/offer-ride' Component={OfferRide}/>
          <Route exact path='/future-rides' Component={FutureRides}/>
          <Route exact path='/reviews' Component={Reviews}/>
        </Routes>
      </Router>
    </>
    );
}

export default App;