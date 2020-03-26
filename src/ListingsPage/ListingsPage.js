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
      favListings:[]
    }
  }

  componentDidMount() {
    const { listings } = this.state
    const { url } = this.props
    const defaultUrl = 'http://localhost:3001/api/v1/listings'
    fetch(url || defaultUrl)
      .then(res => res.json())
      .then(data => this.setState({listings: [...listings, ...data.listings]}))
      .catch(err => console.log(err.message))
  }

  handleFavorites = (id) => {
    const { favListings } = this.state
    favListings.includes(id) ? this.removeFromFavorites(id) : this.addToFavorites(id);
  }

  removeFromFavorites = (id) => {
    const { favListings } = this.state
    const updatedListings = favListings.filter(listing => listing !== id)
    this.setState({favListings: [...updatedListings]})
  }

  addToFavorites = (id) => {
    const { favListings } = this.state
    this.setState({favListings: [...favListings, id]})
  }

  render() {
    const { listings, favListings } = this.state
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
              isFavorite = {favListings.includes(listing.listing_id)}
              handleFavorites = {this.handleFavorites}
            />
          )}
        </section>
      </section>
    )
  }
}

export default ListingsPage
