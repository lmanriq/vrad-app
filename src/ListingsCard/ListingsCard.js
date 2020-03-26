// functional component
// Listings card - Name, picture, view details btn, favorite icon
// card render: const checked = isFavorite, render checkbox as checked

import React from 'react';
import './ListingsCard.css';

function ListingsCard({ id, name, address, details }) {
  const {beds, baths, cost_per_night, features} = details
  function makeKey() {
    return Math.trunc((Math.random() * 1000) * (Math.random() * 1000))
  }
  return (
    <section className='listings-card card'>
      <h3>{ name }</h3>
      <h4>Street:{address.street} Zip: {address.zip}</h4>
      <ul>
        <li>Beds: {beds}</li>
        <li>Baths: {baths}</li>
        <li>Cost Per Night: {cost_per_night}</li>
        <li>
          <ul>Features:
            {features.map(feature => (<li key={makeKey()}>{feature}</li>))}
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default ListingsCard
