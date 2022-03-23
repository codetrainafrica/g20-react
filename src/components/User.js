import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import firebase from "../firebase/config";

const User = (props) => {
  const user = props.user;
  const [isShowing, setIsShowing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleDelete = async () => {
    try {
      firebase.firestore().collection("users").doc(user.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let userData = {
        id: user.id,
        name: name,
        email: email,
        gen: gen,
      };

      firebase.firestore().collection("users").doc(user.id).update(userData);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <h5>{user.gen}</h5>
        <Button onClick={() => setIsShowing(true)}>Edit</Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
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

// const User = (props) => {
//   const user = props.user;
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h3>{user.email}</h3>
//       <h5>{user.gen}</h5>
//       <Button>Edit</Button>
//       <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
//         Delete
//       </Button>
//     </div>
//   );
// };

// const sendActionAsProps = {
//   deleteUser: deleteUserAction,
// };

// export default connect(null, sendActionAsProps)(User);
