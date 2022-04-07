import React from "react";
import { Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const userDetails = useSelector((state) => state.authReducer.userDetails);

  if (!userDetails) return <Navigate to="/login" replace={true} />;
  return children;
};

export default ProtectedRoute;
