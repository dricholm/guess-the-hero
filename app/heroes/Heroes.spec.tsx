import { render, screen } from '@testing-library/react';
import heroesJson from 'dotaconstants/build/heroes.json';
import Heroes from './page';

describe('Heroes', () => {
  it('should render every hero', () => {
    render(<Heroes />);

    Object.values(heroesJson).forEach((hero) => {
      expect(screen.getByText(hero.localized_name)).toBeVisible();
    });
  });
});
