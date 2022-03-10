import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect, useDispatch } from "react-redux";
import { addUserAction } from "../actions/actions";

//the short way
// const UserForm = () => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newUser = {
//       id: uuid(),
//       name: name,
//       email: email,
//     };

//     dispatch(addUserAction(newUser));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         placeholder="Name"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <input
//         type="email"
//         value={email}
//         placeholder="Email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input type="submit" />
//     </form>
//   );
// };

// export default UserForm;

// //the long way
const UserForm = (props) => {
  console.log(props);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
    };

    props.createUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

//aka mapDispatchToProps
const sendActionAsProps = {
  createUser: addUserAction,
};

export default connect(null, sendActionAsProps)(UserForm);
