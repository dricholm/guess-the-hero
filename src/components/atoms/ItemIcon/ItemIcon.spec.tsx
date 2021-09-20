import { render, screen } from '@testing-library/react';
import ItemIcon from '.';

describe('ItemIcon', () => {
  it('should render an empty item', () => {
    render(<ItemIcon id={0} />);

    expect(screen.getByAltText('Empty slot')).toBeInTheDocument();
  });

  it("should render an item's image", () => {
    render(<ItemIcon id={1} />);

    expect(screen.getByAltText('Blink Dagger')).toBeInTheDocument();
  });
});
