import React from 'react';
import './NeighborhoodCard.css';

// NeighborhoodsCard - Name, picture, view listings btn 
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

const NeighborhoodCard = (props) => {
  console.log(props)
  return (
    <article id={props.id} className="card neighborhood-card">
      <h4>{props.areaNickname}</h4>
      <p>{props.name}</p>
      <p>{props.location}</p>
      <p>{props.description}</p>
    </article>
  )
}

export default NeighborhoodCard; 