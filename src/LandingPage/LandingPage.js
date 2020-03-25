import React from 'react';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm.js'
import logo from '../logo.svg'


function LandingPage(props) {
  return (
    <section className='landing-page'>
      <div className='container-landing'>
        <img className='icon-landing' alt='Blucifer' src={logo}/>
        <h1>Welcome to Blucifinder</h1>
        <LoginForm
          updateUser = {props.updateUser}/>
      </div>
    </section>
  )
}

export default LandingPage
