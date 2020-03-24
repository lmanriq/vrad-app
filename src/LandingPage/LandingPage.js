import React from 'react';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm.js'

function LandingPage(props) {
  return (
    <div>
      <h1>Welcome to VRAD</h1>
      <LoginForm 
        updateUser = {props.updateUser}/>
    </div>
  )
}

export default LandingPage
