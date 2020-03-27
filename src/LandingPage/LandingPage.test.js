import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingPage from './LandingPage.js';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'

function renderLandingPage() {
  const utils = render(
    <Router>
      <LandingPage
      updateUser = {jest.fn()}
       />
    </Router>
 )
  return utils
}
describe('LandingPage', () => {
  it('Should exist', () => {
  const { getByText } = renderLandingPage()
    const heading = getByText('Welcome to Blucifinder')
    expect(heading).toBeInTheDocument()
  })



})
