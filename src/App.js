import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       number: 2,
//       isHungry: true,
//     };
//   }

//   addOne = () => {
//     this.setState({ number: this.state.number * 5, isHungry: false });
//   };

//   render() {
//     console.log(this.state.isHungry);
//     return (
//       <div className="App">
//         <h1>{this.state.number}</h1>
//         <h3>{this.state.isHungry}</h3>
//         <button onClick={this.addOne}>Add 1</button>
//         <button>Remove 1</button>
//       </div>
//     );
//   }
// }

// function App() {
//   const [number, setNumber] = React.useState(10);
//   const [isHungry, setIsHungry] = React.useState(true);

//   const addOne = () => {
//     setNumber(number + 1);
//   };

//   return (
//     <div className="App">
//       <h1>{number}</h1>
//       <button onClick={addOne}>Add one</button>
//       <button>Remove one</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label>Password</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
