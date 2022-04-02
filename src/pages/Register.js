import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import firebaseConfig from "../firebase/config";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      const user = await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password);

      firebaseConfig
        .firestore()
        .collection("customers")
        .doc(user.user.uid)
        .set({ age: 7, profilePhoto: "dhdhdjh", username: "kofijay" });

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();

      const provider = new firebase.auth.GoogleAuthProvider();
      const user = await firebaseConfig.auth().signInWithPopup(provider);
      console.log(user);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "#eee",
            borderRadius: 10,
            padding: 50,
          }}
        >
          <h1>Register</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Submit
            </Button>
            <Button variant="primary" type="submit" onClick={signInWithGoogle}>
              Sign in with Google
            </Button>

            <p>
              Already have an account? <Link to="/login">Register</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
