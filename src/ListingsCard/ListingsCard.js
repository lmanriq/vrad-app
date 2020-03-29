// functional component
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

import React from 'react';
import './ListingsCard.css';
import { Link } from 'react-router-dom'

function ListingsCard({ id, name, isFavorite }) {
  const favorite = isFavorite ? ' favorite' : '';
  console.log(favorite);
  return (
    <section className={'listings-card card' + favorite}>
      <h3>{ name }</h3>
      <label className='favorite-label'>
        <Link to={`/listings/${id}`} >
          <button type='button'>View Details</button>
        </Link>
      </label>
    </section>
  )
}

export default ListingsCard
