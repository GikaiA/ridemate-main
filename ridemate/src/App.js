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
import OfferRide from './component s/OfferRide/OfferRide';
import FutureRides from './components/FutureRides/FutureRides';

function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC85MIwtX_rzRTGvK1_8pj_ckShyhfTKDI",
  authDomain: "ridemate-m3.firebaseapp.com",
  projectId: "ridemate-m3",
  storageBucket: "ridemate-m3.appspot.com",
  messagingSenderId: "701704022330",
  appId: "1:701704022330:web:724b4aa7454d0e2f7d0803",
  measurementId: "G-FE1NQXQPPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
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