import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Base from '.';

jest.mock('next/router', () => ({
  Router: { events: { off: jest.fn(), on: jest.fn() } },
  useRouter: jest.fn(),
}));

describe('Base', () => {
  it('should render header, children and footer', () => {
    (useRouter as jest.Mock).mockImplementation(() => ({ asPath: '/' }));
    const content = 'Base content';

    render(<Base>{content}</Base>);

    expect(screen.getByRole('heading')).toHaveTextContent('GtH');
    expect(screen.getByText(content)).toBeVisible();
    expect(screen.getByText(/github/i)).toBeVisible();
  });
});
