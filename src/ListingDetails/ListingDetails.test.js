import React from 'react';
import { render } from '@testing-library/react';
import ListingDetails from './ListingDetails';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";

describe ('Listing Details', () => {
  it('renders text that we expect', () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const { getByText } = render (
      <BrowserRouter>
        <ListingDetails
          currentUser = {currentUser}
          id = {3}
        />
      </BrowserRouter>
    )
    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
  })
})