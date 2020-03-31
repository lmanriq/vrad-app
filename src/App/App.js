import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './../LandingPage/LandingPage.js'
import NeighborhoodsPage from './../NeighborhoodsPage/NeighborhoodsPage.js'
import ListingsPage from './../ListingsPage/ListingsPage.js'
import ListingDetails from '../ListingDetails/ListingDetails.js'


// class component

class App extends React.Component {
  //When a user clicks on the View Listings, the user should then be redirected to /areas/:area_id/listings/.
  //NOTE: Be careful on how to structure this route. The parts of the route that are dynamic (ex: /:area_id) should not actually include a colon - it is simply to show that this part of the route should change. An example of what a completed route would look like could be: /areas/66
  // http://localhost:3001/api/v1/areas
  // http://localhost:3001/api/v1/areas/:id
  // http://localhost:3001/api/v1/listings/:id
  // const AREAS = 'areas'

  // fetch(BASE + AREAS + AREA_ID)
  constructor() {
    super()
    this.state = {
      currentUser: {
        name: null,
        email: null,
        purpose: null,
      },
      favListings:[]
    }
  }

  componentDidMount() {
    const location = window.location.pathname !== '/'
    const { name } = this.state.currentUser
    if (window.localStorage.user) {
      const userString = window.localStorage.getItem('user')
      const user = JSON.parse(userString)
      this.setState({currentUser: {...user}})
    } else if (name === null && location) {
      window.location.pathname = '/'
    }
  }

  checkIsFavorite = (id) => {
    const { favListings } = this.state
    return favListings.includes(id)
  }

  handleFavorites = (id) => {
    this.checkIsFavorite(id) ? this.removeFromFavorites(id) : this.addToFavorites(id);
  }

  removeFromFavorites = (id) => {
    const { favListings } = this.state
    const updatedListings = favListings.filter(listing => listing !== id)
    this.setState({favListings: [...updatedListings]})
  }

  addToFavorites = (id) => {
    const { favListings } = this.state
    this.setState({favListings: [...favListings, id]})
  }

  updateUser = (user) => {
    this.setState({currentUser: user});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/neighborhoods/:id/listings"
              component={({ match }) => {
                const { params } = match;
                return <ListingsPage
                  handleFavorites = {this.handleFavorites}
                  currentUser = {this.state.currentUser}
                  checkIsFavorite = {this.checkIsFavorite}
                  favoritesLength = {this.state.favListings.length}
                  {...params}
                />
               }
              }
            />
            <Route
              path="/neighborhoods" exact
              component={() => {
                return <NeighborhoodsPage
                  currentUser = {this.state.currentUser}
                  favoritesLength = {this.state.favListings.length}
                  areas = {this.state.areas}
                />
              }
            }/>
            <Route
              path="/listings/:id"
              component={({ match }) => {
              const { params } = match;
              return (<ListingDetails
                  currentUser = {this.state.currentUser}
                  favoritesLength = {this.state.favListings.length}
                  handleFavorites = {this.handleFavorites}
                  checkIsFavorite = {this.checkIsFavorite}
                  {...params}
                />)
              }}
            />
            <Route
              path="/listings" exact
              component={() => {
                return (<ListingsPage
                  currentUser = {this.state.currentUser}
                  checkIsFavorite = {this.checkIsFavorite}
                  handleFavorites = {this.handleFavorites}
                  favoritesLength = {this.state.favListings.length}
                  />)
              }
            }/>
            <Route
              path="/favorites" exact
              component={() => {
                return (<ListingsPage
                  currentUser = {this.state.currentUser}
                  handleFavorites = {this.handleFavorites}
                  favorites = {this.state.favListings}
                  favoritesLength = {this.state.favListings.length}
                  checkIsFavorite = {this.checkIsFavorite}
                  />)
              }
            }/>
            <Route
              path="/" exact
              component={() =>
                <LandingPage
                  updateUser = {this.updateUser}/>}
            />
          </Switch>
        </div>
      </Router>
    )};
}

export default App;
