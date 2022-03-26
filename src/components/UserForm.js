import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import firebase from "../firebase/config";

function UserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let id = uuid();

    let newUser = {
      id,
      name: name,
      email: email,
      gen: gen,
    };

    firebase.firestore().collection("users").doc(id).set(newUser);
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
