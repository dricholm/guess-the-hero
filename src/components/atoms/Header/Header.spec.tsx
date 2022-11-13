import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Header from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('should render with links', () => {
    (useRouter as jest.Mock).mockImplementation(() => ({ asPath: '/' }));
    const expectedLinks = [
      { text: 'GtH', url: '/' },
      { text: 'Play', url: '/play' },
      { text: 'Heroes', url: '/heroes' },
      { text: 'Items', url: '/items' },
    ];

    render(<Header />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(expectedLinks.length);
    expectedLinks.forEach(({ text, url }, index) => {
      expect(links[index]).toHaveTextContent(text);
      expect(links[index]).toHaveAttribute('href', url);
    });
  });
});
