import itemsJson from 'dotaconstants/build/items.json';
import { render, screen } from '@testing-library/react';
import ItemWithModal from '.';

describe('ItemWithModal', () => {
  it('should render', async () => {
    const item = itemsJson.heart;

    render(<ItemWithModal id={item.id} />);

    screen.getByAltText(item.dname).click();
    expect(await screen.findByText(item.dname)).toBeVisible();
  });
});
