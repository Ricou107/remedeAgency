import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <NavLink to="/">
        <h3>Return to Home</h3>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error;
