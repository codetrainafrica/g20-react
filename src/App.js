import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/Userform";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([
    { name: "John", email: "john@email.com" },
    { name: "Mary", email: "mary@email.com" },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
