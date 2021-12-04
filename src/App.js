import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

function App() {
  return (
    <>
      <Navbar />
      <Side />
      <Body />
      <Footer />
    </>
  );
}

function Side() {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Side</h1>
    </div>
  );
}

export default App;
