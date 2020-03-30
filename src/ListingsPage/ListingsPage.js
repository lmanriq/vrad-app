// class component

// favoriteListings array in state that stores fav ids
// isFavorite prop passed down to card (check if included in the favs array)
// addToFavorites and removeFromFavorites methods to add/subtract from the array
import React from 'react';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js'
import ListingsCard from './../ListingsCard/ListingsCard.js'
import Header from './../Header/Header.js'

class ListingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [],
    }
  }

  fetchAllListings = () => {
    const { listings } = this.state
    fetch('http://localhost:3001/api/v1/listings')
      .then(res => res.json())
      .then(data => this.setState({listings: [...listings, ...data.listings]}))
      .catch(err => console.log(err.message))
  }

  componentDidMount() {
    this.props.id ? this.fetchAreaListings() : this.fetchAllListings()
  }

  fetchAreaListings = () => {
    let { id } = this.props
    fetch(`http://localhost:3001/api/v1/areas/${id}`)
      .then(res => res.json())
      .then(data => data.listings)
      .then(listings => {const promises = listings.map(listing => {
        return fetch('http://localhost:3001' + listing)
                .then(res => res.json())
          })
          return Promise.all(promises)
        })
      .then(data => this.setState({listings: [...data]}))
      .catch(err => console.log(err.message))
  }

  render() {
    const { listings } = this.state
    const { checkIsFavorite } = this.props

    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container listings-container">
          {listings.map(listing =>
            <ListingsCard
              id = {listing.listing_id}
              name = {listing.name}
              key = {listing.listing_id}
              isFavorite = { checkIsFavorite(listing.listing_id) }
            />
          )}
        </section>
      </section>
    )
  }
}

export default ListingsPage
