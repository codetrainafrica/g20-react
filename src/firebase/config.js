// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6PNpajvi_Hi2loUa24nHjpFvCCDFw66M",
  authDomain: "users-app-g20.firebaseapp.com",
  projectId: "users-app-g20",
  storageBucket: "users-app-g20.appspot.com",
  messagingSenderId: "575854062218",
  appId: "1:575854062218:web:33290f3043fcd1d08e5b73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
