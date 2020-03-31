import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = (props) => {
  function LogOut() {
    window.localStorage.removeItem('user')
  }
  return (
    <header>
      <img className="small-logo" src="/images/logo.svg" alt="blucifinder logo"/>
      <section className="user-info">
        <section className="welcome-details">
          <h1>Welcome, {props.currentUser.name}</h1>
          <p>We're here to help with all of your {props.currentUser.purpose} needs</p>
        </section>
        <section className="avatar-section">
          <img className="avatar-photo" src="/images/avatar-photo.png" alt="avatar" />
          <Link to='/'>
            <button onClick={LogOut} type="button">Log Out</button>
          </Link>
        </section>
      </section>
    </header>
  )
}

export default Header;
