// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD2GrmTMEe24f9J8jSOinUqpX6V5OSADro",
  authDomain: "web-store-app-906e0.firebaseapp.com",
  projectId: "web-store-app-906e0",
  storageBucket: "web-store-app-906e0.appspot.com",
  messagingSenderId: "472205230573",
  appId: "1:472205230573:web:ead896e528fde8577127e4",
  measurementId: "G-PTYPTGE275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getauth = getAuth(app)
const provider = new GoogleAuthProvider()
export {getauth,provider}