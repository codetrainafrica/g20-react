import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default Router;
