import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
    };

    props.addUser(newUser);

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Full name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;
