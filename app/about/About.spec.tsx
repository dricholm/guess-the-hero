import { render, screen } from '@testing-library/react';
import About from './page';

describe('About', () => {
  it('should show about page', () => {
    render(<About />);

    expect(screen.getByText('About')).toBeVisible();
  });
});
