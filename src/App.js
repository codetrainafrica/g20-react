import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  //users state array which will hold the users
  const [users, setUsers] = useState([
    { name: "Tony", email: "tony@email.com" },
    { name: "Adjowa", email: "adjowa@email.com" },
    { name: "Patrick", email: "patrick@email.com" },
  ]);

  //addUser function to add a new user to the users array
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      {/* UserForm component is passed the addUser function as a prop */}
      <UserForm addUser={addUser} />
      {/* UserList component is passed the users array as a prop */}
      <UserList users={users} />
    </div>
  );
};

export default App;
