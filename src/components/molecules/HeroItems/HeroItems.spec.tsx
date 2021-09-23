import itemsJson from 'dotaconstants/build/items.json';
import { render, screen } from '@testing-library/react';
import HeroItems from '.';

describe('HeroItems', () => {
  it('should render items', () => {
    const backpack = [itemsJson.recipe_armlet];
    const inventory = [itemsJson.blink, itemsJson.boots];
    const neutral = itemsJson.clumsy_net;

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
