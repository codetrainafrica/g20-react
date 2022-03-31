import React from "react";
import { Button, Modal } from "react-bootstrap";
import firebase from "../firebase/config";

const User = (props) => {
  const user = props.user;

  const [show, setShow] = React.useState(false);

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    let updatedUser = {
      id: user.id,
      name: name,
      email: email,
    };

    firebase.firestore().collection("users").doc(user.id).update(updatedUser);

    handleClose();
  };

  const handleDelete = () => {
    firebase.firestore().collection("users").doc(user.id).delete();
  };

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <Button onClick={() => setShow(true)}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
