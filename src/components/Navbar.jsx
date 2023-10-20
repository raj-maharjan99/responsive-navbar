import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img width={120} src="logomens.png" alt="logo" />
      </Link>
      <li>
        <Link to="/gallery">
          <img width={80} src="bigsale.png" alt="" />
        </Link>
      </li>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Registration Form</Link>
        </li>
        <div>
          {" "}
          <Link to="/youtube">
            <img
              width={100}
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
              alt=""
            />
          </Link>
        </div>
      </ul>

      <div className=" @apply flex gap-5  justify-end;">
        <div>
          <Link>
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/256/2838/2838895.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          {" "}
          <img
            width="30"
            src="https://cdn-icons-png.flaticon.com/256/622/622669.png"
            alt=""
          />
        </div>
        <div>
          <img
            width={30}
            src="https://cdn-icons-png.flaticon.com/256/2609/2609282.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
