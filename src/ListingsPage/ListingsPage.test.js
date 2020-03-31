import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ListingsPage from './ListingsPage';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { fetchAllListingsData } from '../utils/apiCalls';
jest.mock('../utils/apiCalls')

describe ('Listings Page', () => {
  it('renders text that we expect', async () => {
    fetchAllListingsData.mockResolvedValueOnce(
      {
        listings: [
          {
            listing_id: 3,
            area_id: 590,
            name: "Hip RiNo Party Spot",
            address: {
            street: "2250 Lawrence St",
            zip: "80205"
            },
            details: {
            neighborhood_id: 5124122,
            superhost: true,
            seller_source: "91jss1",
            beds: 3,
            baths: 2.5,
            cost_per_night: 420,
            features: [
            "hot tub",
            "espresso machine"
            ]
            },
            dev_id: "u4gh2j",
            area: "rino",
            db_connect: 834470
          }
        ]
      }
    )
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const mockCheckIsFavorite = jest.fn();
    const mockHandleFavorites = jest.fn();
    const mockLogOut = jest.fn();
    const { getByTestId, getByText } = render (
      <BrowserRouter>
        <ListingsPage
          currentUser = {currentUser}
          checkIsFavorite = {mockCheckIsFavorite}
          handleFavorites = {mockHandleFavorites}
          favoritesLength = {3}
          logOut = {mockLogOut}
        />
      </BrowserRouter>
    )
    expect(getByTestId('listings-section')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    const sampleCard = await waitFor(() => getByText('Hip RiNo Party Spot'))
    expect(sampleCard).toBeInTheDocument();
  })
})
