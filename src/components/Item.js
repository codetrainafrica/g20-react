import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Item = (props) => {
  //boolean state to control the modal
  const [isShowing, setIsShowing] = useState(false);

  //variables to hold the user's id, name and email
  const id = props.user.id;
  const username = props.user.name;
  const useremail = props.user.email;

  //user name state for editing
  const [name, setName] = useState(username);
  //user email state for editing
  const [email, setEmail] = useState(useremail);

  //function to handle editing user details
  const handleEdit = () => {
    let editedUser = {
      name: name,
      email: email,
      id: id,
    };

    //call the editUser function from the parent component and pass in the user's id and the new user object
    props.editUser(id, editedUser);
    //close the modal
    setIsShowing(false);
  };

  return (
    <div>
      <h3>{username}</h3>
      <h4>{useremail}</h4>
      <Button
        onClick={() => {
          setIsShowing(true);
        }}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          props.deleteUser(id);
        }}
      >
        Delete
      </Button>

      <Modal
        show={isShowing}
        onHide={() => {
          setIsShowing(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;
