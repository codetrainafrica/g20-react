import React, { useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import firebase from "./firebase/config";
import { connect, useDispatch } from "react-redux";
import { setUsers } from "./actions/actions";
import { setUser } from "./actions/authActions";
import Router from "./Router";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) dispatch(setUser(user));
      else dispatch(setUser(null));
    });
  }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((document) => {
        let users = [];

        document.forEach((doc) => {
          users.push(doc.data());
        });

        props.setUsers(users);
      });
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

const mapDispatchToProps = {
  setUsers,
};

export default connect(null, mapDispatchToProps)(App);
