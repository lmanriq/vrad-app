// class component to hold onto form inputs
import React from 'react';
import { Link } from 'react-router-dom'
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      purpose: ''
    }
  }

  componentDidMount() {
    if (window.localStorage.user) {
      const userString = window.localStorage.getItem('user')
      const user = JSON.parse(userString)
      this.setState({...user})
    }
  }

  handleRemeber = (checked) => {
    if (!checked) {
      const userInfo = JSON.stringify(this.state)
      window.localStorage.setItem('user', userInfo)
    } else {
      window.localStorage.removeItem('user')
    }

  }

  updateState(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { name, email, purpose } = this.state;
    const isDisabled = !(name && email && purpose);
    const rememberd = window.localStorage.user

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
            value={this.state.purpose || 'choose a purpose'}>
            <option value="choose a purpose" disabled="disabled">Choose a Purpose</option>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
            <option value="fleeing">Fleeing Disaster</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label htmlFor='stay-logged'>Remember Me:
          <input disabled={isDisabled} id='stay-logged' defaultChecked={rememberd} onChange={() => {this.handleRemeber(rememberd)}} type="checkbox"/>
        </label>
        <Link to='/neighborhoods'>
          <button type="button" onClick={() => {this.props.updateUser(this.state)}} disabled={isDisabled}>Log In</button>
        </Link>
      </form>
    )
  }

}

export default LoginForm;
