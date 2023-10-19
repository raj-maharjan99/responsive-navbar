import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link to="./" className="title">
        <img
          width={150}
          src="https://broadwayinfosys.com/uploads/logo/1667276403.new_broadway_logo.svg"
          alt=""
        />
      </Link>

      <ul>
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
