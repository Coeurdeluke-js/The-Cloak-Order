// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0UB6YiItA-pkkNZ-c8q1587a41d4zlmk",
  authDomain: "the-cloak-order.firebaseapp.com",
  projectId: "the-cloak-order",
  storageBucket: "the-cloak-order.firebasestorage.app",
  messagingSenderId: "306675899074",
  appId: "1:306675899074:web:9eba2870568b1c9260f95b",
  measurementId: "G-L1TLD70ZMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);