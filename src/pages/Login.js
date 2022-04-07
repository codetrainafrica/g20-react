import React, { useState } from "react";
import { signInUser, signInWithGoogle } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password, navigate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input type="submit" />
      <button onClick={() => signInWithGoogle(navigate)}>
        Sign in with Google
      </button>
    </form>
  );
};

export default Login;
