import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  it('should render', () => {
    const content = 'Modal content';

    render(<Modal onClose={() => null}>{content}</Modal>);

    expect(screen.getByText(content)).toBeVisible();
  });

  it('should call onClose when the close button is clicked', async () => {
    const content = 'Modal content';
    const onClose = jest.fn();

    render(<Modal onClose={onClose}>{content}</Modal>);

    await userEvent.click(screen.getByLabelText(/close/i));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
