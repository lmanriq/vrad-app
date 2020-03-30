// functional component

import React from 'react';
import './ListingDetails.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'

class ListingDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: {
        listing_id: null,
        name: null,
        address: {
          street: null,
          zip: null
        },
        details: {
          beds: null,
          baths: null,
          superhost: null,
          cost_per_night: null,
          features: []
        },
        area: null
      },
      isFavorite: false
    }
  }

  componentDidMount() {
    const { checkIsFavorite, id } = this.props
    fetch(`http://localhost:3001/api/v1/listings/${id}`)
      .then(res => res.json())
      .then(data => this.setState({listing: {...data}}))
      .then(wait => this.setState({isFavorite: checkIsFavorite(this.state.listing.listing_id)}))
      .catch(err => console.log(err.message))
  }

  render(){
    const { listing, isFavorite } = this.state;
    const { listing_id, name, address, details } = listing;
    const { handleFavorites, checkIsFavorite, currentUser, favoritesLength } = this.props

    return (
      <section className="main-page">
        <Header currentUser = {currentUser}/>
        <Nav favoritesLength={favoritesLength}/>
        <section className="container listing-details-container">
          <section className="details-header">
            <div className="favorite-checkbox">
              <input id={listing_id} onChange={() => handleFavorites(listing_id)} type="checkbox" checked={isFavorite}/>
              <label htmlFor={listing_id}></label>
            </div>
            <div>
              <h1>{name}</h1>
              <p>{address.street} Denver, CO {address.zip}</p>
            </div>
          </section>
          {details.superhost && <p className="superhost"><img src="/images/thunder.svg" alt="lightning logo" />Superhost<img src="/images/thunder.svg" alt="lightning logo" /></p>}
          <p>Cost Per Night: ${details.cost_per_night}</p>
          <p>Beds: {details.beds}</p>
          <p>Baths: {details.baths}</p>
          <p>Features: {details.features.join(', ')}</p>
          <section className="listing-imgs">
            <img src={`/images/${listing_id}_a.jpg`} alt={`${name} first`}/>
            <img src={`/images/${listing_id}_b.jpg`} alt={`${name} second`}/>
            <img src={`/images/${listing_id}_c.jpg`} alt={`${name} third`}/>
          </section>
        </section>
      </section>
    )

  }
}

export default ListingDetails
