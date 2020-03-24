import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to='/neighborhoods'>
        <button>log in</button>
      </Link>
    </div>
  )
}

export default LandingPage
