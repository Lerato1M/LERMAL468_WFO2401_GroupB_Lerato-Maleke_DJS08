// components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/images/about-hero.png';

function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" alt="About Hero" />
      <div className="about-page-content">
        <h1>Your Home away from home is waiting for you to go on an adventure!</h1>
        <p>Explore Africa from luxury and comfort and enjoy the sunsets from Cape to Cairo.</p>
        <p>Vanlife is prepared to accompany you to your dream destination.</p>
      </div>
      <div className="about-page-cta">
        <h2>Adventure awaits. Your van is READY.</h2>
        <Link className="link-button" to="src\pages\Vans.jsx">
          Check the Van you want
        </Link>
      </div>
    </div>
  );
}

export default About;