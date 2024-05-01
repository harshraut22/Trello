import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3 className="card-title">{card.title}</h3>
      <p className="card-label">{card.label}</p>
      <p className="card-description">{card.description}</p>
    </div>
  );
};

export default Card;
