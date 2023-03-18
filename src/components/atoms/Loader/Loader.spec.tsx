import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('should render', () => {
    render(<Loader />);

    expect(screen.getByLabelText(/loading/i)).toBeVisible();
  });
});
