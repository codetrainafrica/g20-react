import React, { useState } from "react";
import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = { number: 0, name: "" };
//   }

//   addOne = () => {
//     this.setState({ number: this.state.number + 1 });
//     this.setState({ name: "John" });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.number}</h1>
//         <h3>{this.state.name}</h3>
//         <button onClick={this.addOne}>Add 1</button>
//       </div>
//     );
//   }
// }

// function App() {
//   const [number, setNumber] = React.useState(0);
//   const [name, setName] = useState("");

//   const addOne = () => {
//     setNumber(number + 1, () => {
//       console.log("Updated");
//     });
//     setName("John");
//   };

//   return (
//     <div className="App">
//       <h1>{number}</h1>
//       <h3>{name}</h3>
//       <button onClick={addOne}>Add 1</button>
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

  handelSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handelSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
