import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
  });

  test('renders top menu section correctly', () => {
    render(<Home />);
    expect(screen.getByAltText('Very Berry Healthy Summer Smoothie')).toBeInTheDocument();
    expect(screen.getByAltText('Carrot and Ginger Soup')).toBeInTheDocument();
    expect(screen.getByAltText('Loaded mixed berries Minitart')).toBeInTheDocument();
  });

  test('renders about us section correctly', () => {
    render(<Home />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('READ MORE')).toBeInTheDocument();
  });

  test('clicking read more button expands about us text', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('READ MORE'));
    expect(screen.getByText('printing and typesetting industry')).toBeInTheDocument();
  });
});
