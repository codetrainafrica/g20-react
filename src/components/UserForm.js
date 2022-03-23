import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import firebase from "../firebase/config";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let newUser = {
        id: uuid(),
        name: name,
        email: email,
        gen: gen,
      };

      firebase.firestore().collection("users").doc(newUser.id).set(newUser);
    } catch (error) {
      console.log(error);
    }
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
};

export default Form;
