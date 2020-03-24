import React from 'react';
import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm.js'
import { Link } from 'react-router-dom'

function LandingPage(props) {
  // form component will need props.updateUser
  return (
    <div>
      <h1>Welcome to VRAD</h1>
      <LoginForm updateUser = {props.updateUser}/>
    </div>
  )
}

export default LandingPage
