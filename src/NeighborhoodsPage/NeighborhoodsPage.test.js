import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NeighborhoodsPage from './NeighborhoodsPage';
import '@testing-library/jest-dom'
import sampleAreas from '../sample-data/sample-areas'
import { BrowserRouter } from "react-router-dom";

describe ('Neighborhoods Page', () => {
  it('renders text that we expect', async () => {
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <NeighborhoodsPage
          currentUser = {currentUser}
          areas = {sampleAreas.areas}
        />
      </BrowserRouter>
    )
    expect(getByTestId('neighborhood-section')).toBeInTheDocument();
    const sampleCard = await waitFor(() => getByText('RiNo'))
    expect(sampleCard).toBeInTheDocument();
  })
})