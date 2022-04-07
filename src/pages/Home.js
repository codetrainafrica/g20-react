import React from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { signOut } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <UserForm />
      <UserList />

      <button onClick={() => signOut(navigate)}>Sign out</button>
    </>
  );
};

export default Home;
