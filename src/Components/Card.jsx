import React from 'react';

const Card = ({ card }) => {
  const cardStyles = {
    backgroundColor : "white",
    padding : "5px",
    margin: "2vh"
  }
  return (
    <div className="card" style={cardStyles}>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-label">{card.label}</p>
      <p className="card-description">{card.description}</p>
    </div>
  );
};

export default Card;
