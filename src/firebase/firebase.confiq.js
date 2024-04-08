// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdE1JaAxBsM2PGScL262FmytnXbTvv2c",
  authDomain: "real-estate-28013.firebaseapp.com",
  projectId: "real-estate-28013",
  storageBucket: "real-estate-28013.appspot.com",
  messagingSenderId: "12218164503",
  appId: "1:12218164503:web:1f2a3b0abab0fb36da0352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;