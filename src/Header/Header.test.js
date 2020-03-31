import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

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
  
  it("navigates to the login page when you click log out", async ()=> {
    const history = createMemoryHistory();
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
    )

    const logOutBtn = getByText('Log Out');
    fireEvent.click(logOutBtn);
    expect(history.location.pathname).toBe('/');
  });
})
