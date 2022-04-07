import React, { useEffect } from "react";
import "./App.css";
import { firestore, auth } from "./firebase/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsersAction } from "./actions/actions";
import { setUserDetails } from "./actions/authActions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  const getAllUsers = () => {
    firestore.collection("users").onSnapshot((snapshot) => {
      let users = [];

      snapshot.forEach((doc) => {
        users.push(doc.data());
      });

      dispatch(setUsersAction(users));
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        dispatch(setUserDetails(user));
      } else {
        dispatch(setUserDetails(null));
      }
    });
    getAllUsers();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
