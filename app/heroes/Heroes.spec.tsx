import { render, screen } from '@testing-library/react';
import { heroes } from 'dotaconstants';
import Heroes from './page';

describe('Heroes', () => {
  it('should render every hero', () => {
    render(<Heroes />);

    Object.values(heroes).forEach((hero) => {
      expect(screen.getByText(hero.localized_name)).toBeVisible();
    });
  });
});
