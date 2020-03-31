// functional component
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

import React from 'react';
import './ListingsCard.css';
import { Link } from 'react-router-dom'

function ListingsCard({ id, name, isFavorite, handleFavorites }) {
  const imgSrc =`/images/${id}_b.jpg`
  return (
    <section className='listings-card card'>
      <h3>{name}</h3>
      <img className='thumb-nail' src={imgSrc} alt={name}/>
      <div className='card-bottom'>
        <div className="favorite-checkbox">
          <input data-testid="favorites-checkbox" id={id} onChange={() => handleFavorites(id)} type="checkbox" checked={isFavorite}/>
          <label data-testid="favorites-lable" htmlFor={id}></label>
        </div>
        <label className='favorite-label'>
          <Link to={`/listings/${id}`} >
            <button type='button'>View Details</button>
          </Link>
        </label>
      </div>
    </section>
  )
}

export default ListingsCard
