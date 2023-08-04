import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import BookRide from './components/BookRide/BookRide';
import OfferRide from './components/OfferRide/OfferRide';
import FutureRides from './components/FutureRides/FutureRides';

function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfYkjkGJXrbL3Usb9W5sIOYbXiv1yzOkQ",
  authDomain: "ridemate-main.firebaseapp.com",
  databaseURL: "https://ridemate-main-default-rtdb.firebaseio.com",
  projectId: "ridemate-main",
  storageBucket: "ridemate-main.appspot.com",
  messagingSenderId: "204573329333",
  appId: "1:204573329333:web:e790ab7585cdaa9d04fbfc",
  measurementId: "G-HJGS4N8R8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
//const analytics = getAnalytics(app);
const auth= firebase.auth()
const db = firebase.firestore()
const analytics = firebase.analytics();

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