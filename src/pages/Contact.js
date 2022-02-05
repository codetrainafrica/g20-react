import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const foods = ["Fufu", "Kenkey", "Banku", "Rice"];

  return (
    <div>
      <h1>Contact</h1>
      {foods.map((food, index) => {
        return <h3 onClick={() => navigate(`/details/${index}`)}>{food}</h3>;
      })}
    </div>
  );
};

export default Contact;
