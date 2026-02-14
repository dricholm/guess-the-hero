import { render, screen } from '@testing-library/react';
import { items } from 'dotaconstants';
import ItemDetails from './ItemDetails';

describe('ItemDetails', () => {
  it('should render', () => {
    const item = items.blink;
    render(<ItemDetails id={item.id} />);

    expect(screen.getByText(item.dname)).toBeVisible();
    expect(screen.getByText(item.cost)).toBeVisible();
  });
});
