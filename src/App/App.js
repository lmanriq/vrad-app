import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './../LandingPage/LandingPage.js'
import NeighborhoodsPage from './../NeighborhoodsPage/NeighborhoodsPage.js'
import ListingsPage from './../ListingsPage/ListingsPage.js'
import ListingDetails from '../ListingDetails/ListingDetails.js'

class App extends React.Component {
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
    const { currentUser, favListings } = this.state
    const { name } = currentUser
    if (window.localStorage.user) {
      const userString = window.localStorage.getItem('user')
      const user = JSON.parse(userString)
      const key = user.email
      const favsString = window.localStorage.getItem(`${key}Favs`)
      const favs = JSON.parse(favsString)
      this.setState({
        currentUser: {...user},
        favListings: [...favListings, ...favs]
      })
    } else if (name === null && location) {
      window.location.pathname = '/'
    }
  }

  loadFavs = (favs) => {
    const { favListings } = this.state
    this.setState({favListings: [...favListings, ...favs]})
  }

  checkIsFavorite = (id) => {
    const { favListings } = this.state
    return favListings.includes(id)
  }

  handleFavorites = (id) => {
    this.checkIsFavorite(id) ? this.removeFromFavorites(id) : this.addToFavorites(id);
  }

  updateLocalFavs = (id) => {
    const { email } = this.state.currentUser
    const key = email
    let savedFavs = JSON.parse(window.localStorage.getItem(`${key}Favs`))
    if (savedFavs.includes(id)) {
      let updatedSaves = savedFavs.filter(listing => listing !== id)
      window.localStorage.setItem(`${key}Favs`, JSON.stringify(updatedSaves))
    } else {
      let updatedSaves = [...savedFavs, id]
      window.localStorage.setItem(`${key}Favs`, JSON.stringify(updatedSaves))
    }
  }

  removeFromFavorites = (id) => {
    const { favListings } = this.state
    const updatedListings = favListings.filter(listing => listing !== id)
    this.setState({favListings: [...updatedListings]})
    this.updateLocalFavs(id)
  }

  addToFavorites = (id) => {
    const { favListings } = this.state
    this.setState({favListings: [...favListings, id]})
    this.updateLocalFavs(id)
  }

  updateUser = (user) => {
    this.setState({currentUser: user});
  }

  logOut = () => {
    window.localStorage.removeItem('user')
    this.setState({favListings: []})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/listings/neighborhoods/:id"
              component={({ match }) => {
                const { params } = match;
                return <ListingsPage
                  handleFavorites = {this.handleFavorites}
                  currentUser = {this.state.currentUser}
                  checkIsFavorite = {this.checkIsFavorite}
                  favoritesLength = {this.state.favListings.length}
                  logOut = {this.logOut}
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
                  logOut = {this.logOut}
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
                  logOut = {this.logOut}
                  id = {parseInt(params.id)}
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
                  logOut = {this.logOut}
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
                  logOut = {this.logOut}
                  />)
              }
            }/>
            <Route
              path="/" exact
              component={() =>
                <LandingPage
                  updateUser = {this.updateUser}
                  loadFavs = {this.loadFavs}
                />}
            />
          </Switch>
        </div>
      </Router>
    )};
}

export default App;
