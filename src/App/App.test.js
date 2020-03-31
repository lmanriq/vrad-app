import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders lthe app', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to Blucifinder')).toBeInTheDocument();
});
