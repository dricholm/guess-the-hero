import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import heroesJson from 'dotaconstants/build/heroes.json';

import HeroSelect from '.';

describe('HeroSelect', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('should submit selected hero', async () => {
    const hero = heroesJson['22'];

    render(<HeroSelect onSubmit={onSubmit} />);
    await userEvent.click(screen.getByAltText(hero.localized_name));
    await userEvent.click(screen.getByText(/select/i));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(hero.id);
  });

  it('should render disabled', () => {
    render(<HeroSelect isDisabled={true} onSubmit={onSubmit} />);

    expect(screen.getByLabelText(/filter/i)).toBeDisabled();
    screen.getAllByRole('radio').forEach((element) => {
      expect(element).toBeDisabled();
    });
    expect(screen.getByText(/choose/i)).toBeDisabled();
  });

  it('should filter heroes based on input', async () => {
    render(<HeroSelect onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText(/filter/i), 'shadow');
    const heroes = screen.getAllByRole('radio');
    expect(heroes).toHaveLength(3);
    expect(screen.getByAltText(/shadow demon/i)).toBeVisible();
    expect(screen.getByAltText(/shadow fiend/i)).toBeVisible();
    expect(screen.getByAltText(/shadow shaman/i)).toBeVisible();
    await userEvent.type(screen.getByLabelText(/filter/i), 'no hero');
    expect(screen.getByText(/no heroes/i)).toBeVisible();
  });
});
