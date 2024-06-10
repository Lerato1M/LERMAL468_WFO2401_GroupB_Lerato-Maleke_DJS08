// components/VanDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function VanDetails() {
  const { vanId } = useParams();          // Parameters


  // Fetch van details based on vanId from API or data source

  const van = {
    id: vanId,
    name: `Van ${vanId}`,
    description: `Description of the Van ${vanId}.`,

  };

  return (
    <div className="van-details-container">
      <h1>{van.name}</h1>
      <p>{van.description}</p>
    </div>
  );
}

export default VanDetails;