import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './Nav';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function renderNav() {
  const utils = render(
  <Router>
    <Nav favoritesLength={0}/>
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
    const favoriteBtn = getByText('Favorites')
    expect(header).toBeInTheDocument()
    expect(neighborhoodsBtn).toBeInTheDocument()
    expect(listingsBtn).toBeInTheDocument()
    expect(favoriteBtn).toBeInTheDocument()
  })

  it('Should navigate', () => {
    const { getByText, debug } = renderNav()
    const neighborhoodsBtn = getByText('Neighborhoods')
    const listingsBtn = getByText('Listings')
    debug()
    // fireEvent.click(listingsBtn)
    fireEvent.click(neighborhoodsBtn)
    // expect(location.pathname).toBe('/listings')
    expect(location.pathname).toBe('/neighborhoods')
  })


})
