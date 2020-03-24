import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// class component

function App() {
  //When a user clicks on the View Listings, the user should then be redirected to /areas/:area_id/listings/.
  //NOTE: Be careful on how to structure this route. The parts of the route that are dynamic (ex: /:area_id) should not actually include a colon - it is simply to show that this part of the route should change. An example of what a completed route would look like could be: /areas/66
  // http://localhost:3001/api/v1/areas	
  // http://localhost:3001/api/v1/areas/:id	
  // http://localhost:3001/api/v1/listings/:id	

  // const BASE = 'http://localhost:3001/api/v1/'
  // const AREAS = 'areas'

  // fetch(BASE + AREAS + AREA_ID)

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
          <Router path="/Neighborhoods" component={NeighborhoodsPage}/>
          <Router path="/Listings" component={ListingsPage}/>
          <Router path="/" exact component={LandingPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



render () {
  return (
    <Header />
    <Nav />
    <main>
      {neighborhoodCards}
    </main>
  )
}


const Listings = () => {}
render () {
  return (
    <Header />
    <Nav />
    <main>
      {listingCards}
    </main>
  )
}
