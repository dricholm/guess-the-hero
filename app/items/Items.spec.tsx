import { render, screen } from '@testing-library/react';
import Items from './page';

describe('Items', () => {
  it('should show at least one item', () => {
    render(<Items />);

    expect(screen.getByAltText('Iron Branch')).toBeVisible();
  });
});
