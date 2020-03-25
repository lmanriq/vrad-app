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
      <main>
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <h1>Neighborhoods Page</h1>
      </main>
    )
  }
}

export default NeighborhoodsPage
