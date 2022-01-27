import React, { useState } from "react";

const UserForm = (props) => {
  //name state variable for the name input
  const [name, setName] = useState("");
  //email state variable for the email input
  const [email, setEmail] = useState("");

  //handleSubmit function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //create a new user object with the name and email state variables
    let newUser = {
      name: name,
      email: email,
    };

    //call the addUser function from props and pass the newUser object as a parameter
    props.addUser(newUser);

    //reset the name and email state variables to empty strings
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default UserForm;
