// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45F240u8trQK7Li5rGmq01UnsfMFVr78",
  authDomain: "foodzy-6c83b.firebaseapp.com",
  projectId: "foodzy-6c83b",
  storageBucket: "foodzy-6c83b.firebasestorage.app",
  messagingSenderId: "832573315149",
  appId: "1:832573315149:web:1b1e09b2818092e90da404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);