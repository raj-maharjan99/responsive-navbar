import React from "react";
import "./AboutPage.css"; // Import a CSS file for styling

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a company dedicated to providing
          high-quality products and services.
        </p>
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create innovative solutions that improve the lives
          of our customers. We strive to deliver exceptional products and
          services that meet and exceed their needs.
        </p>
        <h2>Our Team</h2>
        <p>
          We have a diverse and talented team of professionals who are
          passionate about what they do. They work together to achieve our goals
          and maintain our commitment to excellence.
        </p>
      </div>
      <div className="flex justify-center gap-12 ">
        <img
          className="h-[200px] border-4 border-solid border-[black]  "
          src="https://thumbs.dreamstime.com/z/children-playing-nepal-village-annapurna-circuit-95481780.jpg"
          alt=""
        />
        <img
          className="h-[200px] border-4 border-solid border-[black]"
          src="https://static1.bigstockphoto.com/4/0/2/large1500/204480226.jpg"
          alt=""
        />
        <img
          className="h-[200px] border-4 border-solid border-[black]"
          src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2015/06/19/Incoming/Pictures/1360424_Wallpaper2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
