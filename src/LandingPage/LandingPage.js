import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm.js'
import { ReactComponent as Logo }  from './../logo.svg'


function LandingPage({ updateUser, loadFavs }) {
  return (
    <section className='landing-page'>
      <div className='container-landing'>
        <div className='logo-box'>
          <Logo />
        </div>
        <h1>Welcome to Blucifinder</h1>
        <LoginForm
          updateUser = { updateUser }
          loadFavs = { loadFavs }
          />
      </div>
    </section>
  )
}

export default LandingPage

LandingPage.propTypes = {
  updateUser: PropTypes.func
}


