import { render, screen } from '@testing-library/react';
import { items } from 'dotaconstants';
import HeroItems from './HeroItems';

describe('HeroItems', () => {
  it('should render items', () => {
    const backpack = [items.recipe_armlet];
    const inventory = [items.blink, items.boots];
    const neutral = items.clumsy_net;

    render(
      <HeroItems
        backpack={backpack.map((item) => item.id)}
        inventory={inventory.map((item) => item.id)}
        neutral={neutral.id}
      />,
    );

    [...backpack, ...inventory, neutral].flat().forEach((item) => {
      expect(screen.getByAltText(item.dname)).toBeVisible();
    });
  });
});
