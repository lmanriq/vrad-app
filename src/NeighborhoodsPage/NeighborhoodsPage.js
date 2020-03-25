// class component

// state has a neighborhoods property which is where we store the fetched neighborhood data
import React from 'react';
import './NeighborhoodsPage.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'

class NeighborhoodsPage extends React.Component {
  constructor(props) {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container">
          <p>neighborhoods</p>
        </section>
      </section>
    )
  }
}

export default NeighborhoodsPage
