// class component to hold onto form inputs
import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      email: '',
      purpose: 'choose a purpose'
    }
  }

  updateState(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form> 
        <label for="name">Name: 
          <input 
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Your Full Name"
            onChange={(e) => {this.updateState(e)}}
          />
        </label>
        <label for="email">Email: 
          <input 
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            placeholder="email@email.com"
            onChange={(e) => {this.updateState(e)}}
          />
        </label>
        <label for="purpose">Purpose: 
          <select id="purpose" name="purpose">
            <option value="choose a purpose" selected="true" disabled="disabled">Choose a Purpose</option>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
            <option value="fleeing">Fleeing Disaster</option>
            <option value="other">Other</option>
          </select>
        </label>
        <Link to='/neighborhoods'>
          <button>log in</button>
        </Link>
      </form>
    )
  }
  
}

export default LoginForm;