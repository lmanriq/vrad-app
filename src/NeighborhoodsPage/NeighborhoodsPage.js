import React from 'react';
import PropTypes from 'prop-types';
import './NeighborhoodsPage.css';
import Nav from './../Nav/Nav.js';
import Header from './../Header/Header.js';
import NeighborhoodCard from '../NeighborhoodCard/NeighborhoodCard.js';
import { fetchNeighborhoodData } from '../utils/apiCalls'


class NeighborhoodsPage extends React.Component {
  constructor(props) {
    super(props)
    this.controller = new AbortController()
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    const signal = this.controller.signal;
    fetchNeighborhoodData(signal)
      .then(data => {
        this.setState({areas: data})})
      .catch(err => console.error(err))
  }

  componentWillUnmount() {
    this.controller.abort();
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
    const { currentUser, favoritesLength, logOut } = this.props
    return (
      <section className="main-page">
        <Header logOut = {logOut} currentUser = {currentUser}/>
        <Nav favoritesLength= {favoritesLength}/>
        <section data-testid="neighborhood-section" className="container neighborhood-container">
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
