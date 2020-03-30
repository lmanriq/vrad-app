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
    const sampleCard = await waitForElement(() => getByText('Hip RiNo Party Spot'));
    const superhost = await waitForElement(() => getByText('Superhost'));
    const cost = await waitForElement(() => getByText('Cost Per Night: $420'));
    const beds = await waitForElement(() => getByText('Beds: 3'));
    const baths = await waitForElement(() => getByText('Baths: 2.5'));
    const features = await waitForElement(() => getByText('Features: hot tub, espresso machine'));
    expect(sampleCard).toBeInTheDocument();
    expect(superhost).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(beds).toBeInTheDocument();
    expect(baths).toBeInTheDocument();
    expect(features).toBeInTheDocument();
  })
})