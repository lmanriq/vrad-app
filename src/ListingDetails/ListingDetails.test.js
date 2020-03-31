import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import ListingDetails from './ListingDetails';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

describe ('Listing Details', () => {
  it('renders text that we expect', async () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const mockCheckIsFavorite = jest.fn();
    const mockHandleFavorites = jest.fn();
    const { getByText, getByTestId } = render (
      <BrowserRouter>
        <ListingDetails
          currentUser = {currentUser}
          favoritesLength = {5}
          handleFavorites = {mockCheckIsFavorite}
          checkIsFavorite = {mockHandleFavorites}
          id = {3}
        />
      </BrowserRouter>
    )
    expect(getByTestId('details-section')).toBeInTheDocument();
    const sampleDetails = await waitFor(() => getByText('Hip RiNo Party Spot'));
    const superhost = await waitFor(() => getByText('Superhost'));
    const cost = await waitFor(() => getByText('Cost Per Night: $420'));
    const beds = await waitFor(() => getByText('Beds: 3'));
    const baths = await waitFor(() => getByText('Baths: 2.5'));
    const features = await waitFor(() => getByText('Features: hot tub, espresso machine'));
    expect(sampleDetails).toBeInTheDocument();
    expect(superhost).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(beds).toBeInTheDocument();
    expect(baths).toBeInTheDocument();
    expect(features).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  })

  it('can be favorited', async () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const mockCheckIsFavorite = jest.fn();
    const mockHandleFavorites = jest.fn();
    const { getByTestId, getByText } = render (
      <BrowserRouter>
        <ListingDetails
          currentUser = {currentUser}
          favoritesLength = {5}
          handleFavorites = {mockHandleFavorites}
          checkIsFavorite = {mockCheckIsFavorite}
          id = {3}
        />
      </BrowserRouter>
    )
    const sampleDetails = await waitFor(() => getByText('Hip RiNo Party Spot'));
    expect(sampleDetails).toBeInTheDocument();
    const checkbox = getByTestId('favorites-checkbox');
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(mockHandleFavorites).toHaveBeenCalledWith(3);
  })
})
