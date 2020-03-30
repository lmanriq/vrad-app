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
    const { getByText } = render(
      <BrowserRouter>
        <ListingDetails
          currentUser = {currentUser}
        />
      </BrowserRouter>
    )
    expect(getByText('Welcome, Bob')).toBeInTheDocument();
    expect(getByText(`We're here to help with all of your business needs`)).toBeInTheDocument();
    expect(getByAltText('avatar')).toBeInTheDocument();
    expect(getByText('Log Out')).toBeInTheDocument();
  })
})