import React from 'react';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm.js'
import { ReactComponent as Logo }  from '../logo.svg'


function LandingPage(props) {
  return (
    <section className='landing-page'>
      <div className='container-landing'>
        <div className='logo-box'>
          <Logo />
        </div>
        <h1>Welcome to Blucifinder</h1>
        <LoginForm
          updateUser = {props.updateUser}/>
      </div>
    </section>
  )
}

export default LandingPage
