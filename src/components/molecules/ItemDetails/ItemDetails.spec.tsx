import itemsJson from 'dotaconstants/build/items.json';
import { render, screen } from '@testing-library/react';
import ItemDetails from './ItemDetails';

describe('ItemDetails', () => {
  it('should render', () => {
    const item = itemsJson.blink;
    render(<ItemDetails id={item.id} />);

    expect(screen.getByText(item.dname)).toBeVisible();
    expect(screen.getByText(item.cost)).toBeVisible();
  });
});
