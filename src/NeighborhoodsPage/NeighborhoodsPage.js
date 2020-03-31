import React from 'react';
import PropTypes from 'prop-types';
import './NeighborhoodsPage.css';
import Nav from './../Nav/Nav.js'
import Header from './../Header/Header.js'
import NeighborhoodCard from '../NeighborhoodCard/NeighborhoodCard.js'


class NeighborhoodsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
        const promises = data.areas.map(area => {
          return fetch('http://localhost:3001' + area.details)
            .then(response => response.json())
            .then(data => {
              return {
                areaNickname: area.area,
                ...data
              }
            })
        })
        return Promise.all(promises)
      })
      .then(data => this.setState({areas: data}))
      .catch(err => console.error(err))
  }

  render() {
    const areaCards = this.state.areas.map(area => {
      return <NeighborhoodCard
        areaNickname = {area.areaNickname}
        name = {area.name}
        id = {area.id}
        key = {area.id}
        location = {area.location}
        description = {area.about}
        listings = {area.listings}
      />
    })
    const { currentUser, favoritesLength } = this.props
    return (
      <section className="main-page">
        <Header currentUser = {currentUser}/>
        <Nav favoritesLength= {favoritesLength}/>
        <section className="container neighborhood-container">
          {areaCards}
        </section>
      </section>
    )
  }
}

export default NeighborhoodsPage

NeighborhoodsPage.propTypes = {
  currentUser: PropTypes.object,
  favoritesLength: PropTypes.number,
  areas: PropTypes.array
}