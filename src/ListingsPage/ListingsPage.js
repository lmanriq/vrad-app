import React from 'react';
import PropTypes from 'prop-types';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js'
import ListingsCard from './../ListingsCard/ListingsCard.js'
import Header from './../Header/Header.js'

class ListingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.controller = new AbortController()
    this.state = {
      listings: [],
    }
  }

  fetchAllListings = () => {
    const signal = this.controller.signal;
    const { listings } = this.state
    fetch('http://localhost:3001/api/v1/listings', { signal })
      .then(res => res.json())
      .then(data => this.setState({listings: [...listings, ...data.listings]}))
      .then(wait => this.props.favorites && this.showFavorites())
      .catch(err => console.log(err.message))
  }

  componentDidMount() {
    this.props.id && this.fetchAreaListings()
    !(this.props.id) && this.fetchAllListings()
  }

  fetchAreaListings = () => {
    const signal = this.controller.signal;
    let { id } = this.props
    fetch(`http://localhost:3001/api/v1/areas/${id}`, { signal })
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

  showFavorites() {
    const { listings } = this.state
    const { favorites } = this.props
    const favListings = listings.filter(listing => favorites.includes(listing.listing_id))
    console.log(favListings);
    this.setState({listings: [...favListings]})
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { listings } = this.state
    const { checkIsFavorite, favoritesLength, handleFavorites, logOut } = this.props

    return (
      <section className="main-page">
        <Header logOut = {logOut} currentUser = {this.props.currentUser}/>
        <Nav favoritesLength= {favoritesLength}/>
        <section data-testid="listings-section" className="container listings-container">
          {listings.map(listing =>
            <ListingsCard
              id = {listing.listing_id}
              name = {listing.name}
              handleFavorites = { handleFavorites }
              key = {listing.listing_id}
              isFavorite = { checkIsFavorite(listing.listing_id) }
            />
          )}
        </section>
      </section>
    )
  }
}

export default ListingsPage;

ListingsPage.propTypes = {
  currentUser: PropTypes.object,
  favoritesLength: PropTypes.number, 
  handleFavorites: PropTypes.func,
  checkIsFavorite: PropTypes.func,
  favorites: PropTypes.array
}


