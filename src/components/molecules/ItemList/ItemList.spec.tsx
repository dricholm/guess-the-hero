import { render, screen } from '@testing-library/react';
import itemsJson from 'dotaconstants/build/items.json';
import ItemList from './ItemList';

describe('ItemList', () => {
  it('should render', () => {
    const items = [itemsJson.apex, itemsJson.bfury];
    const title = 'ItemList title';

    render(<ItemList ids={items.map((item) => item.id)} title={title} />);

    expect(screen.getByText(title)).toBeVisible();
    items.forEach((item) => {
      expect(screen.getByAltText(item.dname)).toBeVisible();
    });
  });
});
