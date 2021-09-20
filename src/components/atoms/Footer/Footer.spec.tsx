import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render the Footer', () => {
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
