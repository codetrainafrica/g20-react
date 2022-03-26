import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import firebase from "../firebase/config";

const User = (props) => {
  const { user } = props;

  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    let newDetails = {
      name,
      email,
      gen,
      id: user.id,
    };

    firebase.firestore().collection("users").doc(user.id).update(newDetails);

    handleClose();
  };

  const handleDelete = () => {
    firebase.firestore().collection("users").doc(user.id).delete();
  };

  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.gen}</h1>
      <Button onClick={() => setShow(true)}>Edit</Button>
      <Button onClick={() => handleDelete()} variant="danger">
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={gen}
            onChange={(e) => setGen(e.target.value)}
            type="number"
            placeholder="Gen"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
