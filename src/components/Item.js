import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Item = (props) => {
  //state variable for the showModal state
  const [isShowing, setIsShowing] = useState(false);

  //user variable for the user object
  const user = props.user;

  //name state variable for the name input
  const [name, setName] = useState(user.name);
  //email state variable for the email input
  const [email, setEmail] = useState(user.email);

  //handleSubmit function to handle the form submission
  const handleSubmit = () => {
    //create a new user object with the name and email state variables
    let updatedUser = {
      id: user.id,
      name: name,
      email: email,
    };

    //call the editUser function from props and pass the newUser object as a parameter
    props.editUser(user.id, updatedUser);

    //hide the modal
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
