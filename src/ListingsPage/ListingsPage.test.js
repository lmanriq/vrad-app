import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import ListingsPage from './ListingsPage';
import '@testing-library/jest-dom'
// import sampleListings from '../sample-data/sample-listings'
import { BrowserRouter } from "react-router-dom";

describe ('Listings Page', () => {
  it('renders text that we expect', async () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const mockCheckIsFavorite = jest.fn();
    const mockHandleFavorites = jest.fn();
    const { getByTestId, getByText } = render (
      <BrowserRouter>
        <ListingsPage
          currentUser = {currentUser}
          checkIsFavorite = {mockCheckIsFavorite}
          handleFavorites = {mockHandleFavorites}
          favoritesLength = {3}
        />
      </BrowserRouter>
    )
    expect(getByTestId('listings-section')).toBeInTheDocument();
    const sampleCard = await waitForElement(() => getByText('Hip RiNo Party Spot'))
    expect(sampleCard).toBeInTheDocument();
  })
})