import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const User = (props) => {
  //user variable holds the user object passed as props
  const user = props.user;

  //state to hold the state of the edit modal
  const [isShowing, setIsShowing] = useState(false);

  //state to hold the value of the name input
  const [name, setName] = useState(user.name);
  //state to hold the value of the email input
  const [email, setEmail] = useState(user.email);

  //function to handle the click event of the edit button
  const handleEdit = () => {
    //details variable holds the details of the user to be edited
    const updatedUser = {
      name: name,
      email: email,
      id: user.id,
    };

    //calls the editUser function which was passed as props to the User component
    props.editUser(user.id, updatedUser);

    //sets the isShowing state to false
    setIsShowing(false);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button onClick={() => setIsShowing(true)}>Edit</Button>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
