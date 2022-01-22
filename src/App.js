import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/Userform";
import UserList from "./components/UserList";

const App = () => {
  /*users state array with 2 default
   users having name and email*/
  const [users, setUsers] = useState([
    { name: "John", email: "john@email.com" },
    { name: "Mary", email: "mary@email.com" },
  ]);

  //function to add new user to users state array
  const addUser = (newUser) => {
    //makes a copy of the current state and adds new user to the new copy
    //and then upadtes the users state to the new copy
    setUsers([...users, newUser]);
  };

  return (
    <div>
      {/* displays the User form and passes the addUser function as props */}
      <UserForm addUser={addUser} />

      {/* displays the user list and passes the users state as props */}
      <UserList users={users} />
    </div>
  );
};

export default App;
