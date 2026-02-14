import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { items } from 'dotaconstants';
import ItemWithModal from './ItemWithModal';

describe('ItemWithModal', () => {
  it('should render', async () => {
    const item = items.heart;

    render(<ItemWithModal id={item.id} />);

    await userEvent.click(screen.getByAltText(item.dname));
    expect(await screen.findByText(item.dname)).toBeVisible();
  });
});
