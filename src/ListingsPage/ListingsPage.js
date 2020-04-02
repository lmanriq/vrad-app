import React from 'react';
import PropTypes from 'prop-types';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js';
import ListingsCard from './../ListingsCard/ListingsCard.js';
import Header from './../Header/Header.js';
import { fetchAllListingsData, fetchAreaListingsData } from '../utils/apiCalls';


class ListingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.controller = new AbortController()
    this.state = {
      listings: [],
      page: null
    }
  }

  fetchAllListings = () => {
    const signal = this.controller.signal;
    const { listings } = this.state
    fetchAllListingsData(signal)
      .then(data => this.setState({listings: [...listings, ...data.listings], page: 'listings'}))
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
    fetchAreaListingsData(id, signal)
      .then(data => this.setState({listings: [...data]}))
      .catch(err => console.log(err.message))
  }

  showFavorites() {
    const { listings } = this.state
    const { favorites } = this.props
    const favListings = listings.filter(listing => favorites.includes(listing.listing_id))
    this.setState({listings: [...favListings], page: 'favorites'})
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { listings } = this.state;
    const { checkIsFavorite, favoritesLength, handleFavorites, logOut } = this.props;
    const listingCards = listings.map(listing =>
            <ListingsCard
              id = {listing.listing_id}
              name = {listing.name}
              handleFavorites = { handleFavorites }
              key = {listing.listing_id}
              isFavorite = { checkIsFavorite(listing.listing_id) }
              cost = {listing.details.cost_per_night}
            />
          );
    const noFavs = this.state.page === 'favorites' && favoritesLength === 0;

    return (
      <section className="main-page">
        <Header logOut = {logOut} currentUser = {this.props.currentUser}/>
        <Nav favoritesLength= {favoritesLength}/>
        <section data-testid="listings-section" className="container listings-container">
          {noFavs && <p>No favorites yet. Click a listing's heart icon to add it to your list.</p>}
          {listingCards}
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
