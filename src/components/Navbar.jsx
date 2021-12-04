import React, { Component } from "react";
import Button from "./Button";

class Navbar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <h1>Navbar</h1>
        <Button btnTitle="Register" />
      </div>
    );
  }
}

export let arr = [1, 2, 3];

export default Navbar;
