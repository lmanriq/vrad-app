import React from 'react';
import './NeighborhoodCard.css';
import { Link } from 'react-router-dom'

// NeighborhoodsCard - Name, picture, view listings btn 
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

const NeighborhoodCard = ({ id, areaNickname, name, location, description }) => {
  // render a ListingsPage component, pass listings as props
  // onClick={render ListingsPage () => getListingsData}
  

  return (
    <article id={id} className="card neighborhood-card">
      <h4>{areaNickname}</h4>
      <p>({name})</p>
      <h5>{location}</h5>
      <p>{description}</p>
      <Link to={`neighborhoods/${id}/listings`}> 
        <button type="button">View Listings</button>
      </Link>
    </article>
  )
}

export default NeighborhoodCard; 