import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
  });

  test('renders contact form section correctly', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  test('renders image section correctly', () => {
    render(<Contact />);
    expect(screen.getByAltText('burgerimg')).toBeInTheDocument();
  });
});
