// components/Vans.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Vans() {
  return (
    <div className="vans-container">
      <h1>Choose Your Van</h1>
      <ul>
        <li>
          <Link to="/vans/1">Van 1</Link>
        </li>
        <li>
          <Link to="/vans/2">Van 2</Link>
        </li>

         <li>
            < Link to="/vans/3">Van 3</Link>

        </li>

        <li>
            <Link to="/vans/4">Van 4</Link>

        </li>
         <li>
            <Link to="/vans/5">Van 5</Link>
        </li>
          <li>
            <Link to="/vans/6">Van 6</Link>

         </li>
      
      </ul>
    </div>
  );
}

export default Vans;