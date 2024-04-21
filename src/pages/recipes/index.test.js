import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from './Recipes';

describe('Recipes Component', () => {
  test('renders without crashing', () => {
    render(<Recipes />);
  });

  test('renders recipe details correctly', () => {
    render(<Recipes />);
    // Check if the recipe details image is rendered
    expect(screen.getByAltText('recipes_details')).toBeInTheDocument();
    // Check if the recipe title is rendered
    expect(screen.getByText('Pumpkin Marshmallow pie')).toBeInTheDocument();
    expect(screen.getByText('Ingredients:')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
    expect(screen.getByText('Instructions:')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
    expect(screen.getByText('Enjoy Your Delicious Pumpkin Marshmallow Pie!')).toBeInTheDocument();
  });
});
