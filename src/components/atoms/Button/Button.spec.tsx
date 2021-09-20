import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('should render a button', () => {
    const content = 'Button content';

    render(<Button>{content}</Button>);

    expect(screen.getByRole('button')).toHaveTextContent(content);
  });

  it('should render a link', () => {
    const content = 'Link content';
    const href = '/test';

    render(<Button href={href}>{content}</Button>);

    expect(screen.getByRole('link')).toHaveTextContent(content);
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});
