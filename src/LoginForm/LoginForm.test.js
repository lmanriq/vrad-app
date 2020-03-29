import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginForm from './LoginForm.js';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'

function renderLoginForm() {
  const mockUpdateUser = jest.fn
  const utils = render(
    <Router>
      <LoginForm
      updateUser = {mockUpdateUser}
       />
    </Router>
 )
  return utils
}
describe('LoginForm', () => {

  it('Should Have its form', () => {
    const { getByText } = renderLoginForm()
    const emailField = getByText('Email:')
    const nameField = getByText('Name:')
    const purposeField = getByText('Purpose:')
    expect(purposeField).toBeInTheDocument()
    expect(nameField).toBeInTheDocument()
    expect(emailField).toBeInTheDocument()
  })

  it('should update user', () => {
    const mockUpdateUser = jest.fn()
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
      <Router>
        <LoginForm
        updateUser = {mockUpdateUser}
         />
      </Router>
   )
  const logInBtn = getByText('Log In')
  const emailInput = getByPlaceholderText('email@email.com')
  const nameInput = getByPlaceholderText('Your Full Name')
  const purposeSelect = getByDisplayValue('Choose a Purpose')
  fireEvent.change(emailInput, { target: { value: 'JohnDoe@email.com' } })
  fireEvent.change(nameInput, { target: { value: 'John' } })
  fireEvent.change(purposeSelect, { target: { value: 'fleeing' } })
  fireEvent.click(logInBtn)

  expect(mockUpdateUser).toHaveBeenCalledWith({purpose: 'fleeing', name:'John', email: 'JohnDoe@email.com'})
  })


})
