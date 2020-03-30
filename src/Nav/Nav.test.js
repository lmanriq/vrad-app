import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './Nav';
import { MemoryRouter as Router, NavLink } from 'react-router-dom'

function renderNav() {
  const utils = render(
  <Router>
    <Nav />
  </Router>
  )
  return utils
}
describe('Nav', () => {

  it('Should Have its exist', () => {
    const { getByText } = renderNav()
    const header = getByText('Blucifinder')
    const neighborhoodsBtn = getByText('Neighborhoods')
    const listingsBtn = getByText('Listings')
    expect(header).toBeInTheDocument()
    expect(neighborhoodsBtn).toBeInTheDocument()
    expect(listingsBtn).toBeInTheDocument()
  })

  it('Should Have its exist', () => {
    const { getByText } = renderNav()
    const header = getByText('Blucifinder')
    const neighborhoodsBtn = getByText('Neighborhoods')
    const listingsBtn = getByText('Listings')
    expect(header).toBeInTheDocument()
    expect(neighborhoodsBtn).toBeInTheDocument()
    expect(listingsBtn).toBeInTheDocument()
  })


})
