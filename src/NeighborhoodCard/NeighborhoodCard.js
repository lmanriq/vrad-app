import React from 'react';
import PropTypes from 'prop-types';
import './NeighborhoodCard.css';
import { Link } from 'react-router-dom'

const NeighborhoodCard = ({ id, areaNickname, name, location, description }) => {
  return (
    <article id={id} className="card neighborhood-card">
      <div>
        <h4>{areaNickname}</h4>
        <p>({name})</p>
        <h5>{location}</h5>
        <p>{description}</p>
      </div>
      <Link to={`/listings/neighborhoods/${id}`}>
        <button type="button">View Listings</button>
      </Link>
    </article>
  )
}

export default NeighborhoodCard;

NeighborhoodCard.propTypes = {
  areaNickname: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  location: PropTypes.string,
  description: PropTypes.string,
  listings: PropTypes.array
}
