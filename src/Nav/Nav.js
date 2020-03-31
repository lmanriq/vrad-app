import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'


const Nav = (props) => {
const  { favoritesLength } = props
  return (
    <nav>
      <h3>Blucifinder</h3>
      <section className="nav-links">
        <NavLink to='/neighborhoods'>
          <button>Neighborhoods</button>
        </NavLink>
        <NavLink to='/listings'>
          <button>Listings</button>
        </NavLink>
        <NavLink to='/favorites'>
          <button>Favorites <span className='fav-count'>{favoritesLength}</span></button>
        </NavLink>
      </section>
    </nav>
  )
}

export default Nav;
