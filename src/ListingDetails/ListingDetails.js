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
      }
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/listings/${this.props.id}`)
      .then(res => res.json())
      .then(data => this.setState({listing: {...data}}))
      .catch(err => console.log(err.message))
  }

  render(){
    console.log(this.state.listing)
    const { listing_id, name, address, details, area } = this.state.listing;

    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container listing-details-container">
          <section className="details-header">
            <label className="favorite-checkbox"><input type="checkbox" defaultChecked={true}/></label>
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
