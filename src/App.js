import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

// const App = () => {
//   const [users, setUsers] = useState([
//     { name: "Tony", email: "tony@email.com" },
//     { name: "Joe", email: "joe@email.com" },
//     { name: "Comfort", email: "comfort@email.com" },
//   ]);

//   const addUser = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   return (
//     <div>
//       <UserForm addUser={addUser} />
//       <UserList users={users} />
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        { name: "Tony", email: "tony@email.com" },
        { name: "Joe", email: "joe@email.com" },
        { name: "Comfort", email: "comfort@email.com" },
      ],
    };
  }

  addUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <div>
        <UserForm addUser={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
