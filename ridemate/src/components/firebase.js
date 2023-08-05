// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
 
export {app, auth, db, storage}