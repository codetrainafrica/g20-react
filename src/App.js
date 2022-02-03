import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { v4 as uuid } from "uuid";

const App = () => {
  //users state array which will hold the users
  const [users, setUsers] = useState([
    { name: "Tony", email: "tony@email.com", id: uuid() },
    { name: "Adjowa", email: "adjowa@email.com", id: uuid() },
    { name: "Patrick", email: "patrick@email.com", id: uuid() },
  ]);

  //addUser function to add a new user to the users array
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => {
      if (id !== user.id) return user;
    });

    setUsers(filteredUsers);
  };

  const editUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (id === user.id) return updatedUser;
      else return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <div>
      {/* UserForm component is passed the addUser function as a prop */}
      <UserForm addUser={addUser} />
      {/* UserList component is passed the users array as a prop */}
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
