import React from 'react';
import './NeighborhoodCard.css';

// NeighborhoodsCard - Name, picture, view listings btn 
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

const NeighborhoodCard = (props) => {
  console.log(props.listings)
  return (
    <article id={props.id} className="card neighborhood-card">
      <h4>{props.areaNickname}</h4>
      <p>({props.name})</p>
      <h5>{props.location}</h5>
      <p>{props.description}</p>
      <button>View Listings</button>
    </article>
  )
}

export default NeighborhoodCard; 