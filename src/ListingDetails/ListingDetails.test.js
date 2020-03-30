import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import ListingDetails from './ListingDetails';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

describe ('Listing Details', () => {
  it('renders text that we expect', async () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const { getByText, getByTestId } = render (
      <BrowserRouter>
        <ListingDetails
          currentUser = {currentUser}
          id = {3}
        />
      </BrowserRouter>
    )
    expect(getByTestId('details-section')).toBeInTheDocument();
    const sampleCard = await waitForElement(() => getByText('Hip RiNo Party Spot'))
    expect(sampleCard).toBeInTheDocument();
  })
})