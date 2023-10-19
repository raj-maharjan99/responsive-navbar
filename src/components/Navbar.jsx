import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link className="title">
        <img width={150} src="logo1.svg" alt="" />
      </Link>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Student Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
