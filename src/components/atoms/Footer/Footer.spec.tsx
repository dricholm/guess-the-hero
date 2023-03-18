import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render with links', () => {
    const expectedLinks = [
      { text: 'About', url: '/about' },
      { text: 'GitHub', url: 'https://github.com/dricholm/guess-the-hero' },
    ];

    render(<Footer />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(expectedLinks.length);
    expectedLinks.forEach(({ text, url }, index) => {
      expect(links[index]).toHaveTextContent(text);
      expect(links[index]).toHaveAttribute('href', url);
    });
  });
});
