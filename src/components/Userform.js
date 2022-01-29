import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const UserForm = (props) => {
  //state to hold the value of name input
  const [name, setName] = useState("");

  //state to hold the value of email input
  const [email, setEmail] = useState("");

  return (
    <form
      //gets called when the form is submitted
      onSubmit={(e) => {
        //prevents the page from reloading when the form is submitted
        e.preventDefault();

        //variable to hold the newly created user from the input with the id, name and email values
        let newUser = {
          name: name,
          email: email,
          id: uuid(),
        };

        //calls the addUser function which was passed as props to the UserForm component
        props.addUser(newUser);

        //sets the name state to empty
        setName("");

        //sets the email state to empty
        setEmail("");
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        //updates the name state when the name input changes
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        //updates the email state when the email input changes
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default UserForm;
