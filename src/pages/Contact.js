import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const users = ["Kofi", "ama", "Kojo", "Adwoa"];

  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      {users.map((user, index) => {
        return <h1 onClick={() => navigate(`/details/${index}`)}>{user}</h1>;
      })}
    </div>
  );
}
