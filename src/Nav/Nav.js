import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <h3>Blucifinder</h3>
      <section className="nav-links">
        <Link style={{ textDecoration: 'none' }} to='/neighborhoods'>
          <button>Neighborhoods</button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/listings'>
          <button>Listings</button>
        </Link>
      </section>
    </nav>
  )
}

export default Nav;
