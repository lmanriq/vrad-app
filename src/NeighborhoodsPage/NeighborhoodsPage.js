// class component

// state has a neighborhoods property which is where we store the fetched neighborhood data
import React from 'react';
import './NeighborhoodsPage.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'
import Card from '../NeighborhoodCard/NeighborhoodCard.js'


class NeighborhoodsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.areas)
    const areaCards = this.props.areas.map(area => {
      return <Card 
        areaNickname = {area.areaNickname}
        name = {area.name}
        id = {area.id}
        key = {area.id}
        location = {area.location}
        description = {area.about}
      />
    })
    
    return (
      <section className="main-page">
        <Header currentUser = {this.props.currentUser}/>
        <Nav />
        <section className="container">
          {areaCards}
        </section>
      </section>
    )
  }
}

export default NeighborhoodsPage
