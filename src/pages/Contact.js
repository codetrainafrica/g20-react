import React from "react";
// import { useNavigate } from "react-router-dom";

class Contact extends React.Component {
  componentDidMount() {
    console.log("Contact mounted");
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
}

export default Contact;

// export default function Contact() {
//   const users = ["Kofi", "ama", "Kojo", "Adwoa"];

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Contact</h1>
//       {users.map((user, index) => {
//         return <h1 onClick={() => navigate(`/details/${index}`)}>{user}</h1>;
//       })}
//     </div>
//   );
// }
