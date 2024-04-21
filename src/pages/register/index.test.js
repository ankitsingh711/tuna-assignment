import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('Register Component', () => {
  test('renders without crashing', () => {
    render(<Register />);
  });

  test('renders register form section correctly', () => {
    render(<Register />);
    expect(screen.getByTestId('register-form')).toBeInTheDocument();
  });

  test('renders image section correctly', () => {
    render(<Register />);
    expect(screen.getByAltText('burgerimg')).toBeInTheDocument();
  });
});
