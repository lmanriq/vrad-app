import React from 'react';
import { render } from '@testing-library/react';
import NeighborhoodsPage from './NeighborhoodsPage';
import '@testing-library/jest-dom'
import sampleAreas from '../sample-data/sample-areas'
import { BrowserRouter } from "react-router-dom";

describe ('Neighborhoods Page', () => {
  it('renders text that we expect', () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    render(
      <BrowserRouter>
        <NeighborhoodsPage
          currentUser = {currentUser}
          areas = {sampleAreas.areas}
        />
      </BrowserRouter>
    )
    expect(document.querySelector('.neighborhood-container')).toBeInTheDocument();
  })
})