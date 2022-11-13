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
    const hero = heroesJson['2'];

    render(<HeroSelect heroIds={[1, 2, 3, 4, 5]} onSubmit={onSubmit} />);
    await userEvent.click(screen.getByAltText(hero.localized_name));
    await userEvent.click(screen.getByText(/select/i));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(hero.id);
  });

  it('should render disabled', () => {
    render(
      <HeroSelect
        disabled={true}
        heroIds={[1, 2, 3, 4, 5]}
        onSubmit={onSubmit}
      />,
    );

    screen.getAllByRole('radio').forEach((element) => {
      expect(element).toBeDisabled();
    });
    expect(screen.getByText(/choose/i)).toBeDisabled();
  });
});
