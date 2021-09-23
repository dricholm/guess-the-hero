import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
  it('should render with title and content', () => {
    const content = 'Card content';
    const title = 'Card heading';

    render(<Card title={title}>{content}</Card>);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(content)).toBeVisible();
  });

  it('should render without title', () => {
    const content = 'Without title content';

    render(<Card>{content}</Card>);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.getByText(content)).toBeVisible();
  });
});
