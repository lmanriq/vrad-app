import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      purpose: ''
    }
  }

  updateState(e) {
    console.log('ran', e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { name, email, purpose } = this.state;
    const isDisabled = !(name && email && purpose);

    return (
      <form className='login-form' onSubmit={() => false}>
        <label htmlFor="name">Name:
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Your Full Name"
            onChange={(e) => {this.updateState(e)}}
          />
        </label>
        <label htmlFor="email">Email:
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            placeholder="email@email.com"
            onChange={(e) => {this.updateState(e)}}
          />
        </label>
        <label htmlFor="purpose">Purpose:
          <select
            id="purpose"
            name="purpose"
            onChange={(e) => {this.updateState(e)}}
            defaultValue="choose a purpose">
            <option value="choose a purpose" disabled="disabled">Choose a Purpose</option>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
            <option value="fleeing">Fleeing Disaster</option>
            <option value="other">Other</option>
          </select>
        </label>
        <Link to='/neighborhoods'>
          <button type="button" onClick={() => {this.props.updateUser(this.state)}} disabled={isDisabled}>Log In</button>
        </Link>
      </form>
    )
  }

}

export default LoginForm;

LoginForm.propTypes = {
  updateUser: PropTypes.func
}