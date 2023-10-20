import React from "react";
import "./services.css"; // Import your CSS file for styling

function Services() {
  return (
    <div className="nice-page">
      <section className="hero">
        <h1 className="text-[25px] font-bold ">
          Welcome to Our Beautiful Website
        </h1>
        <p>Your go-to source for amazing content.</p>
        <a href="#" className="cta-button">
          Learn More
        </a>
      </section>

      <section className="content">
        <h2>About Us</h2>
        <p>
          We are a creative and innovative team dedicated to providing the best
          solutions for your needs.
        </p>
      </section>

      <section className="  bg-[#3d3d3f] text-center text-[white] px-0 py-[50px]">
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Digital Marketing</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
