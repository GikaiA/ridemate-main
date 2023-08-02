// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
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
// const auth = getAuth(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
