import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import itemsJson from 'dotaconstants/build/items.json';
import ItemWithModal from './ItemWithModal';

describe('ItemWithModal', () => {
  it('should render', async () => {
    const item = itemsJson.heart;

    render(<ItemWithModal id={item.id} />);

    await userEvent.click(screen.getByAltText(item.dname));
    expect(await screen.findByText(item.dname)).toBeVisible();
  });
});
