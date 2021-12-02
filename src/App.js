import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

function App() {
  return (
    <div>
      <Navbar name="Tony" />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

class Navbar extends React.Component {
  render() {
    return <h1 style={{ backgroundColor: "red" }}>{this.props.name}</h1>;
  }
}

function Sidebar() {
  return <h1 style={{ backgroundColor: "blue" }}>Sidebar</h1>;
}

export default App;
