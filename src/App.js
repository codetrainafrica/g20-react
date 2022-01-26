import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
//uuid package which generates unique id
import { v4 as uuid } from "uuid";

const App = () => {
  //users state array which contains 3 default users
  const [users, setUsers] = useState([
    //each user has an id, name, email
    { id: uuid(), name: "Tony", email: "tony@email.com" },
    { id: uuid(), name: "Joe", email: "joe@email.com" },
    { id: uuid(), name: "Comfort", email: "comfort@email.com" },
  ]);

  //addUser function which takes in a user object and adds it to the users state array
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  //editUser function which takes in an id and a user object and replaces the user object in the users state array with the new user object
  const editUser = (id, newUser) => {
    const editedUsers = users.map((user) => {
      if (user.id == id) {
        return newUser;
      }
      return user;
    });

    setUsers(editedUsers);
  };

  //deleteUser function which takes in an id and removes the user object from the users state array
  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => {
      if (user.id != id) return user;
    });

    setUsers(filteredUsers);
  };

  return (
    <div>
      {/* UserForm takes in the addUSer function to add new users to the users state array */}
      <UserForm addUser={addUser} />

      {/* UserList takes in the users state array and the editUser and deleteUser functions to edit and delete users from the users state array */}
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [
//         { name: "Tony", email: "tony@email.com" },
//         { name: "Joe", email: "joe@email.com" },
//         { name: "Comfort", email: "comfort@email.com" },
//       ],
//     };
//   }

//   addUser = (newUser) => {
//     this.setState({ users: [...this.state.users, newUser] });
//   };

//   render() {
//     return (
//       <div>
//         <UserForm addUser={this.addUser} />
//         <UserList users={this.state.users} />
//       </div>
//     );
//   }
// }

export default App;
