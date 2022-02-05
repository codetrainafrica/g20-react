import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Details</h1>
      <h3>{itemId}</h3>
    </div>
  );
};

export default Details;
