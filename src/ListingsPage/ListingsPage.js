// class component

// favoriteListings array in state that stores fav ids
// isFavorite prop passed down to card (check if included in the favs array)
// addToFavorites and removeFromFavorites methods to add/subtract from the array
import React from 'react';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js'
import Card from './../ListingsCard/ListingsCard.js'
import Header from './../Header/Header.js'

class ListingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    const { listings } = this.state
    fetch('http://localhost:3001/api/v1/listings')
      .then(res => res.json())
      .then(data => this.setState({listings: [...listings, ...data.listings]}))
      .catch(err => console.log(err.message))
  }

  render() {
    const { listings } = this.state
    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container">
          {listings.map(listing =>
            <Card
              id = {listing.listing_id}
              name = {listing.name}
              key = {listing.listing_id}
              details = {listing.details}
              address = {listing.address}
              area = {listing.area}
            />
          )}
        </section>
      </section>
    )
  }
}

export default ListingsPage
