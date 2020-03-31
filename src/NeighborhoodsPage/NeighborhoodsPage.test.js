import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NeighborhoodsPage from './NeighborhoodsPage';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { fetchNeighborhoodData } from '../utils/apiCalls';
jest.mock('../utils/apiCalls')

describe ('Neighborhoods Page', () => {
  it('renders text that we expect', async () => {
    const areas = [
        {
          areaNickname: "RiNo",
          id: 590,
          name: "River North",
          location: "North of Downtown Denver",
          about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
          region_code: 6356834,
          quick_search: "o5kod9f5cqo0",
          listings: [
          "/api/v1/listings/3",
          "/api/v1/listings/44",
          "/api/v1/listings/221",
          "/api/v1/listings/744",
          "/api/v1/listings/90",
          "/api/v1/listings/310"
          ]
        },
        {
          areaNickname: "LoHi",
          id: 408,
          name: "Lower Highlands",
          location: "West of Downtown",
          about: "The Lower Highlands area, often referred to as the Highlands or LoHi, was one of the first areas to experience massive growth from the downtown area. Known for many great bars and restaurants with a great eastern facing view of the Downtown area.",
          region_code: 640399,
          quick_search: "17klwudb1h340",
          listings: [
            "/api/v1/listings/83331",
            "/api/v1/listings/411",
            "/api/v1/listings/92",
            "/api/v1/listings/6135",
            "/api/v1/listings/9",
            "/api/v1/listings/11",
            "/api/v1/listings/77"
          ]
        }
      ]
    fetchNeighborhoodData.mockResolvedValueOnce(areas)
    const currentUser = {
      name: 'Bob',
      purpose: 'business'
    }
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <NeighborhoodsPage
          currentUser = {currentUser}
          favoritesLength = {7}
        />
      </BrowserRouter>
    )
    expect(getByTestId('neighborhood-section')).toBeInTheDocument();
    const sampleCard = await waitFor(() => getByText('RiNo'))
    expect(sampleCard).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
  })
})
