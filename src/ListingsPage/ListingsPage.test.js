import React from 'react';
import { render } from '@testing-library/react';
import ListingsPage from './ListingsPage';
import '@testing-library/jest-dom'
// import sampleListings from '../sample-data/sample-listings'
import { BrowserRouter } from "react-router-dom";

describe ('Listings Page', () => {
  it('renders text that we expect', () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    render(
      <BrowserRouter>
        <ListingsPage
          currentUser = {currentUser}
        />
      </BrowserRouter>
    )
    expect(document.querySelector('.listings-container')).toBeInTheDocument();
  })
})