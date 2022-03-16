// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-_D5t_VF8ndD1JsLm6BKB2Ghg4zWLqk",
  authDomain: "users-app-afd0a.firebaseapp.com",
  projectId: "users-app-afd0a",
  storageBucket: "users-app-afd0a.appspot.com",
  messagingSenderId: "390856139887",
  appId: "1:390856139887:web:13d046517498d5df43599a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
