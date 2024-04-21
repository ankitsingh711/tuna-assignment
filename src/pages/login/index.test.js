import React from 'react';
import { render, screen } from '@testing-library/react';
import LogIn from './LogIn';

describe('LogIn Component', () => {
  test('renders without crashing', () => {
    render(<LogIn />);
  });

  test('renders login form section correctly', () => {
    render(<LogIn />);
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  test('renders image section correctly', () => {
    render(<LogIn />);
    expect(screen.getByAltText('burgerimg')).toBeInTheDocument();
  });
});
