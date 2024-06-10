// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>We have the vans to suit your needs</h1>
      <p>Create memories with the greatest vans available for that long-awaited road trip.</p>
      <Link to="src\pages\Vans.jsx">Pick a Van</Link>
    </div>
  );
}

export default Home;