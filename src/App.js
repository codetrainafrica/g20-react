import React, { useState } from "react";
import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = { number: 0, name: "kofi", age: 20 };
//   }

//   addOne = () => {
//     this.setState({ number: this.state.number + 1 });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.number}</h1>
//         <button onClick={this.addOne}>Add 1</button>
//         <button>Subtract 1</button>
//       </div>
//     );
//   }
// }

// function App() {
//   const [number, setNumber] = useState(0);

//   const addOne = () => {
//     setNumber(number + 1);
//   };

//   return (
//     <div className="App">
//       <h1>{number}</h1>
//       <button onClick={addOne}>Add 1</button>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = { email: "", password: "" };
//   }

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(this.state.email, this.state.password);
//   };

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="email"
//             value={this.state.email}
//             onChange={this.handleEmailChange}
//           />
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={this.handlePasswordChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
