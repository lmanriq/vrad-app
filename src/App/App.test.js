import React from 'react';
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import {
fetchAllListingsData,
fetchAreaListingsData,
fetchListingDetailsData,
fetchNeighborhoodData
} from '../utils/apiCalls';
jest.mock('../utils/apiCalls')

describe ('App', () => {
  let listingDetails, listingsObj, areas
   beforeEach(() => {
     listingDetails = {
      "listing_id": 3,
      "area_id": 590,
      "name": "Hip RiNo Party Spot",
      "address": {
      "street": "2250 Lawrence St",
      "zip": "80205"
      },
      "details": {
      "neighborhood_id": 5124122,
      "superhost": true,
      "seller_source": "91jss1",
      "beds": 3,
      "baths": 2.5,
      "cost_per_night": 420,
      "features": [
      "hot tub",
      "espresso machine"
      ]
      },
      "dev_id": "u4gh2j",
      "area": "rino",
      "db_connect": 834470
    }

     listingsObj = {
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

     areas = [
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
   })
   // afterEach(cleanup)

   describe('Logging in', () => {
     it('renders lthe app starting at the log in', () => {
       const { getByText } = render(<App />);
       expect(getByText('Welcome to Blucifinder')).toBeInTheDocument();
     });
   })

   describe('NeighborhoodsPage integration', () => {
     it('User can log in and it will go to neighborhoods', async () => {
       fetchNeighborhoodData.mockResolvedValue(areas)
       const { getByTestId, getByText, getByDisplayValue, getByPlaceholderText, debug } = render(<App />);
       const logInBtn = getByText('Log In')
       const emailInput = getByPlaceholderText('email@email.com')
       const nameInput = getByPlaceholderText('Your Full Name')
       const purposeSelect = getByDisplayValue('Choose a Purpose')
       fireEvent.change(emailInput, { target: { value: 'JohnDoe@email.com' } })
       fireEvent.change(nameInput, { target: { value: 'John' } })
       fireEvent.change(purposeSelect, { target: { value: 'fleeing' } })
       fireEvent.click(logInBtn)
       expect(getByTestId('neighborhood-section')).toBeInTheDocument();
       const sampleCard = await waitFor(() => getByText('RiNo'))
       expect(sampleCard).toBeInTheDocument();
       const logOutBtn = getByText('Log Out')
       fireEvent.click(logOutBtn)
     });

     it('User can log in and it will go to neighborhoods', async () => {
       fetchNeighborhoodData.mockResolvedValueOnce(areas)
       const { getByTestId, getByText, getByDisplayValue, getByPlaceholderText, debug } = render(<App />);
       const logInBtn = getByText('Log In')
       const emailInput = getByPlaceholderText('email@email.com')
       const nameInput = getByPlaceholderText('Your Full Name')
       const purposeSelect = getByDisplayValue('Choose a Purpose')
       fireEvent.change(emailInput, { target: { value: 'JohnDoe@email.com' } })
       fireEvent.change(nameInput, { target: { value: 'John' } })
       fireEvent.change(purposeSelect, { target: { value: 'fleeing' } })
       fireEvent.click(logInBtn)
       debug()
     });

   })

})
