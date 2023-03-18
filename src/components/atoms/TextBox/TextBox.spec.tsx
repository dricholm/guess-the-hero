import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  it('should render', () => {
    const content = 'TextBox content';

    render(<TextBox>{content}</TextBox>);

    expect(screen.getByText(content)).toBeVisible();
  });
});
