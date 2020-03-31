import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListingsCard from './ListingsCard';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function renderListingsCard() {
  const utils = render(
  <Router>
    <ListingsCard
      id = {12}
      name = {'Test Name'}
      isFavorite = {false}
      handleFavorites = {jest.fn()}
    />
  </Router>
  )
  return utils
}
describe('ListingsCard', () => {

  it('Should Have its exist', () => {
    const { getByText, getByAltText, getByTestId } = renderListingsCard()
    const nameField = getByText('Test Name')
    const image = getByAltText('Test Name')
    const listingBtn = getByText('View Details')
    const favCheckBox = getByTestId('favorites-lable')
    expect(nameField).toBeInTheDocument()
    expect(favCheckBox).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(listingBtn).toBeInTheDocument()
  })

  it('Should navigate', () => {
    const { getByText } = renderListingsCard()
    const listingBtn = getByText('View Details')
    fireEvent.click(listingBtn)
    expect(location.pathname).toBe(`/listings/12`)
  })

  it('Should favorite', () => {
    const mockHandleFavorites = jest.fn();
    const { getByTestId } = render(
    <Router>
      <ListingsCard
        id = {12}
        name = {'Test Name'}
        isFavorite = {false}
        handleFavorites = {mockHandleFavorites}
      />
    </Router>
    )
    const favsLabel = getByTestId('favorites-checkbox')
    fireEvent.click(favsLabel)
    expect(mockHandleFavorites).toHaveBeenCalledWith(12);

  })


})
