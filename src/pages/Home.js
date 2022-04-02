import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import firebase from "../firebase/config";

const Home = () => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserForm />
      <UserList />
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Home;
