import React, { useEffect } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import firebase from "./firebase/config";
import { useDispatch } from "react-redux";
import { setUsersAction } from "./actions/actions";

function App() {
  const dispatch = useDispatch();

  const getAllUsers = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        let users = [];

        snapshot.forEach((doc) => {
          users.push(doc.data());
        });

        dispatch(setUsersAction(users));
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
}

export default App;
