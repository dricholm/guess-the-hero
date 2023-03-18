import { render, screen } from '@testing-library/react';
import ItemIcon from '.';

describe('ItemIcon', () => {
  it("should render an item's image", () => {
    render(<ItemIcon id={1} />);

    expect(screen.getByAltText('Blink Dagger')).toBeInTheDocument();
  });
});
