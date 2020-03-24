// class component

// favoriteListings array in state that stores fav ids
// isFavorite prop passed down to card (check if included in the favs array)
// addToFavorites and removeFromFavorites methods to add/subtract from the array
import React from 'react';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js'

class ListingsPage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <Nav />
        <h1>Listings Page</h1>
      </main>
    )
  }
}

export default ListingsPage
