import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });

  test('renders nav links correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText('Tastebites')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Login / Register')).toBeInTheDocument();
  });

  test('closes menu on mobile when nav link is clicked', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByText('Home'));
    const navMenu = screen.getByTestId('nav-menu');
    expect(navMenu).not.toHaveClass('show-menu');
  });
});
