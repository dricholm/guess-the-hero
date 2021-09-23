import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Modal', () => {
  it('should render', () => {
    const content = 'Modal content';

    render(<Modal onClose={() => null}>{content}</Modal>);

    expect(screen.getByText(content)).toBeVisible();
  });

  it('should call onClose when the close button is clicked', () => {
    const content = 'Modal content';
    const onClose = jest.fn();

    render(<Modal onClose={onClose}>{content}</Modal>);

    screen.getByLabelText(/close/i).click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
