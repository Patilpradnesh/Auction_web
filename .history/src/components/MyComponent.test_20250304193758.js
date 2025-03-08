import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/My Component/i);
  expect(linkElement).toBeInTheDocument();
});
