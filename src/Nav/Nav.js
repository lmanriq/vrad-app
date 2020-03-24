import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

// class component 

const Nav = () => {
  // this.state = {
  //   selectedLink = null;
  // }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to='../Neighborhoods/Neighborhoods'>
          <li>Neighborhoods</li>
        </Link>
        <Link to='../Listings/Listings'>
          <li>Listings</li>
        </Link>
        <Link to='../Landing/Landing'>
          <li>Log Out</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;