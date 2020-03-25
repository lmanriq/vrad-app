import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './../LandingPage/LandingPage.js'
import NeighborhoodsPage from './../NeighborhoodsPage/NeighborhoodsPage.js'
import ListingsPage from './../ListingsPage/ListingsPage.js'
import ListingDetails from './../ListingsPage/ListingsPage.js'

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
        purpose: null
      },
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

  updateUser = (user) => {
    this.setState({currentUser: user});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/neighborhoods" component={() => {
                return <NeighborhoodsPage 
                  currentUser = {this.state.currentUser}
                  areas = {this.state.areas}
                />
              }
            }/>
            <Route path="/listings/:id" component={ListingDetails}/>
            <Route path="/listings" exact component={() => {
                return <ListingsPage 
                  currentUser = {this.state.currentUser}/>
              }
            }/>
            <Route path="/" 
              exact component={() => 
                <LandingPage 
                  updateUser = {this.updateUser}/>}
            />
          </Switch>
        </div>
      </Router>
    )};
}

export default App;



// render () {
//   return (
//     <Header />
//     <Nav />
//     <main>
//       {neighborhoodCards}
//     </main>
//   )
// }
//
//
// const Listings = () => {}
// render () {
//   return (
//     <Header />
//     <Nav />
//     <main>
//       {listingCards}
//     </main>
//   )
// }
