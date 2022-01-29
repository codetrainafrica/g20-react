import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/Userform";
import UserList from "./components/UserList";
import { v4 as uuid } from "uuid";

const App = () => {
  /*users state array with 2 default
   users having name and email and generated id*/
  const [users, setUsers] = useState([
    { name: "John", email: "john@email.com", id: uuid() },
    { name: "Mary", email: "mary@email.com", id: uuid() },
  ]);

  //function to add new user to users state array
  const addUser = (newUser) => {
    //makes a copy of the current state and adds new user to the new copy
    //and then upadtes the users state to the new copy
    setUsers([...users, newUser]);
  };

  //function to delete user from users state array
  const deleteUser = (id) => {
    //makes a copy of the current state and filters out the user with the id passed as argument
    const filteredUsers = users.filter((user) => {
      if (id !== user.id) return user;
    });

    //updates the users state to the new copy
    setUsers(filteredUsers);
  };

  const editUser = (id, updatedUser) => {
    //makes a copy of the current state and filters out the user with the id passed as argument
    const updatedUsers = users.map((user) => {
      if (id === user.id) return updatedUser;
      else return user;
    });

    //updates the users state to the new copy
    setUsers(updatedUsers);
  };

  return (
    <div>
      {/* displays the User form and passes the addUser function as props */}
      <UserForm addUser={addUser} />

      {/* displays the User list and passes the users state array, editUser and deleteUser functions as props */}
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
