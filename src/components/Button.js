import React from "react";

// function Button(props) {
//   return <button>{props.btnTitle}</button>;
// }

class Button extends React.Component {
  render() {
    return <button>{this.props.btnTitle}</button>;
  }
}

export default Button;
