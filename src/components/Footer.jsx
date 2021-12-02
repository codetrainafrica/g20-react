import React from "react";
import Button from "./Button";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <h1>Footer</h1>
        <Button buttonText="Register" />
      </div>
    );
  }
}

export default Footer;
