import { render, screen } from '@testing-library/react';
import GameResult from '.';

describe('GameResult', () => {
  const onNewGame = jest.fn();
  const heroId = 1;
  const matchId = 123;

  beforeEach(() => {
    onNewGame.mockClear();
  });

  it('should render correct result', () => {
    const isCorrect = true;

    render(
      <GameResult
        heroId={heroId}
        isCorrect={isCorrect}
        matchId={matchId}
        onNewGame={onNewGame}
      />,
    );

    expect(screen.getByText('Correct')).toBeVisible();
  });

  it('should render incorrect result', () => {
    const isCorrect = false;

    render(
      <GameResult
        heroId={heroId}
        isCorrect={isCorrect}
        matchId={matchId}
        onNewGame={onNewGame}
      />,
    );

    expect(screen.getByText('Incorrect')).toBeVisible();
  });

  it('should render hero and match information', () => {
    const isCorrect = true;

    render(
      <GameResult
        heroId={heroId}
        isCorrect={isCorrect}
        matchId={matchId}
        onNewGame={onNewGame}
      />,
    );

    expect(screen.getByText(/anti-mage/i)).toBeVisible();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('DotaBuff');
    expect(links[0]).toHaveAttribute(
      'href',
      `https://www.dotabuff.com/matches/${matchId}`,
    );
    expect(links[1]).toHaveTextContent('OpenDota');
    expect(links[1]).toHaveAttribute(
      'href',
      `https://www.opendota.com/matches/${matchId}`,
    );
  });

  it('should call new game on button click', () => {
    render(
      <GameResult
        heroId={heroId}
        isCorrect={true}
        matchId={matchId}
        onNewGame={onNewGame}
      />,
    );

    screen.getByText(/new game/i).click();
    expect(onNewGame).toHaveBeenCalledTimes(1);
  });
});
