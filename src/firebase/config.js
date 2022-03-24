import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSrPidvIunoUJi932UdfkY1__MISjSNfE",
  authDomain: "users-app-virtual.firebaseapp.com",
  projectId: "users-app-virtual",
  storageBucket: "users-app-virtual.appspot.com",
  messagingSenderId: "196174390367",
  appId: "1:196174390367:web:f5d4e2527650d196efa7ea",
};

const app = initializeApp(firebaseConfig);
export default app;
