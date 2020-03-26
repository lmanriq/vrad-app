// class component

// favoriteListings array in state that stores fav ids
// isFavorite prop passed down to card (check if included in the favs array)
// addToFavorites and removeFromFavorites methods to add/subtract from the array
import React from 'react';
import './ListingsPage.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'

class ListingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  //if you click on this from the main page, listings is all listings, otherwise 
  // const fetchUrl = 
  // componentDid
  // this.props.listings.map()
  // return the promises
  // Promise.all

  render() {
    console.log(this.props)
    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container">
          <p>listings</p>
        </section>
      </section>
    )
  }
}

export default ListingsPage
