// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi-ym5vWmZQpWu3jtdLI8PtJ3lAyVDEFY",
  authDomain: "e-commerce-fe5d6.firebaseapp.com",
  projectId: "e-commerce-fe5d6",
  storageBucket: "e-commerce-fe5d6.appspot.com",
  messagingSenderId: "319851646783",
  appId: "1:319851646783:web:b4ce1c541ffea8905b4d8a",
  measurementId: "G-0D0QEM8NT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);