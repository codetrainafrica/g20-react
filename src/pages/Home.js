import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import firebase from "../firebase/config";

const Home = () => {
  const signOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={signOut}>Sign out</button>
      <UserForm />
      <UserList />
    </>
  );
};

export default Home;
