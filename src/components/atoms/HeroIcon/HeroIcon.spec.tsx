import { render, screen } from '@testing-library/react';
import HeroIcon from './HeroIcon';

describe('HeroIcon', () => {
  it("should render a hero's image", () => {
    const id = 1;

    render(<HeroIcon id={id} />);

    expect(screen.getByAltText('Anti-Mage')).toBeVisible();
  });

  it("should render a hero's image with empty alt", () => {
    const id = 1;

    render(<HeroIcon hasAlt={false} id={id} />);

    expect(screen.getByRole('presentation')).toBeVisible();
    expect(screen.queryByAltText('Anti-Mage')).toBeNull();
  });
});
