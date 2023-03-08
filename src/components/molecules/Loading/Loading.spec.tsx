import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('Loading', () => {
  it('should render without message', () => {
    render(<Loading />);

    expect(screen.getByLabelText(/loading/i)).toBeVisible();
  });

  it('should render with message', () => {
    const message = 'More detailed info';

    render(<Loading message={message} />);

    expect(screen.getByLabelText(/loading/i)).toBeVisible();
    expect(screen.getByText(message)).toBeVisible();
  });
});
