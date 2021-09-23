import { render, screen } from '@testing-library/react';
import ClientOnlyPortal from '.';

describe('ClientOnlyPortal', () => {
  it('should render', () => {
    const content = 'ClientOnlyPortal content';

    render(<ClientOnlyPortal>{content}</ClientOnlyPortal>);

    expect(screen.getByText(content)).toBeVisible();
  });
});
