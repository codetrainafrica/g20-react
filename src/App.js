import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { v4 as uuid } from "uuid";

const App = () => {
  const [users, setUsers] = useState([
    { id: uuid(), name: "Tony", email: "tony@email.com" },
    { id: uuid(), name: "Joe", email: "joe@email.com" },
    { id: uuid(), name: "Comfort", email: "comfort@email.com" },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser = (id, newUser) => {
    const editedUsers = users.map((user) => {
      if (user.id == id) {
        return newUser;
      }
      return user;
    });

    setUsers(editedUsers);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => {
      if (user.id != id) return user;
    });

    setUsers(filteredUsers);
  };

  return (
    <div>
      <UserForm addUser={addUser} />
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
