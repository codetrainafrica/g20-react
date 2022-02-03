import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Item = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const user = props.user;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = () => {
    let updatedUser = {
      id: user.id,
      name: name,
      email: email,
    };

    props.editUser(user.id, updatedUser);

    setIsShowing(false);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button variant="primary" onClick={() => setIsShowing(true)}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      <Modal show={isShowing} onHide={() => setIsShowing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;
