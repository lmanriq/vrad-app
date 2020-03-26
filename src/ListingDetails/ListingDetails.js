// functional component

import React from 'react';
import './ListingDetails.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'

class ListingDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: null
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/listings/${this.props.id}`)
      .then(res => res.json())
      .then(data => this.setState({listing: {...data}}))
      .catch(err => console.log(err.message))
  }

  render(){
    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container listing-container">
          <h1>Listing</h1>
        </section>
      </section>
    )

  }
}

export default ListingDetails
