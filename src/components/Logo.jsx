import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">Shop FANCY!</Link>
    </div>
  );
};

export default Logo;
