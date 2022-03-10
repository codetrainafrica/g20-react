import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserAction, editUserAction } from "../actions/actions";

const User = (props) => {
  const user = props.user;

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleClose = () => setShow(false);

  console.log(user);

  const handleSubmit = () => {
    let updatedUser = {
      id: user.id,
      name: name,
      email: email,
    };

    dispatch(editUserAction(user.id, updatedUser));

    handleClose();
  };

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <Button onClick={() => setShow(true)}>Edit</Button>
        <Button
          variant="danger"
          onClick={() => dispatch(deleteUserAction(user.id))}
        >
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
