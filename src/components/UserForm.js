import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addUserAction, changeIsLoggedIn } from "../actions/actions";

// function UserForm(props) {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [gen, setGen] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newUser = {
//       name: name,
//       email: email,
//       gen: gen,
//     };

//     props.addUser(newUser);
//     props.toggleLoggedIn();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="number"
//         value={gen}
//         onChange={(e) => setGen(e.target.value)}
//         placeholder="Gen"
//       />

//       <input type="submit" />
//     </form>
//   );
// }

// const sendActionToComponentAsProps = {
//   addUser: addUserAction,
//   toggleLoggedIn: changeIsLoggedIn,
// };

// export default connect(null, sendActionToComponentAsProps)(UserForm);

function UserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
      gen: gen,
    };

    dispatch(addUserAction(newUser));
    dispatch(changeIsLoggedIn());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
        placeholder="Gen"
      />

      <input type="submit" />
    </form>
  );
}

export default UserForm;
