import React from 'react';
import { render, fireEvent, unmountComponentAtNode, waitForElementToBeRemoved } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";

describe ('Header', () => {
  it('renders text that we expect', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Header 
          currentUser = {
            {
              name: 'Bob',
              purpose: 'business'
            }
          }
        />
      </BrowserRouter>
    )
    expect(getByText('Welcome, Bob')).toBeInTheDocument();
    expect(getByText(`We're here to help with all of your business needs`)).toBeInTheDocument();
    expect(getByAltText('avatar')).toBeInTheDocument();
    expect(getByText('Log Out')).toBeInTheDocument();
  })

  // This test is incomplete
  
  it("navigates to the login page when you click log out", async ()=> {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const { getByText } = render(
      <BrowserRouter>
        <Header 
          currentUser = {
            {
              name: 'Bob',
              purpose: 'business'
            }
          }
        />
      </BrowserRouter>,
      root
    )

    act(() => {
      const logOutBtn = getByText('Log Out');
      logOutBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      console.log('clicked')
    });
    
    // await waitForElementToBeRemoved(() => getByText('Log Out'))
    // await expect(document.body.textContent).toBe('Welcome to Blucifinder');
    // await expect(getByText('Welcome to Blucifinder')).toBeInTheDocument();
  });
})