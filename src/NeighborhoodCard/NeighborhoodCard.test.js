import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NeighborhoodCard from './NeighborhoodCard';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function renderNeighborhoodCard() {
  const utils = render(
  <Router>
    <NeighborhoodCard
      areaNickname = 'RiNo'
      name = 'River North'
      id = {12}
      key = {12}
      location = 'Denver'
      description = 'testing description'
      listings = {[]}
    />
  </Router>
  )
  return utils
}
describe('NeighborhoodCard', () => {

  it('Should Have its exist', () => {
    const { getByText } = renderNeighborhoodCard()
    const header = getByText('RiNo')
    const nameField = getByText('(River North)')
    const location = getByText('Denver')
    const description = getByText('testing description')
    const listingsBtn = getByText('View Listings')
    expect(header).toBeInTheDocument()
    expect(nameField).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(listingsBtn).toBeInTheDocument()
  })

  it('Should navigate', () => {
    const { getByText } = renderNeighborhoodCard()
    const listingsBtn = getByText('View Listings')
    fireEvent.click(listingsBtn)
    expect(location.pathname).toBe(`/listings/neighborhoods/12`)
  })


})
