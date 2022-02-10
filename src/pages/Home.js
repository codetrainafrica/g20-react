import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const users = ["Kofi", "Ama", "Kwesi", "John", "James"];

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => navigate("/about")}>Go to about page</Button>

      {users.map((user) => {
        return <h4 onClick={() => navigate(`/profile/${user}`)}>{user}</h4>;
      })}
    </div>
  );
}

export default Home;
