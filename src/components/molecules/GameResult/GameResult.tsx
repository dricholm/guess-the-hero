import clsx from 'clsx';
import { FC } from 'react';
import HeroIcon from 'src/components/atoms/HeroIcon/HeroIcon';
import useHero from 'src/hooks/useHero';
import styles from './GameResult.module.scss';

interface GameResultProps {
  heroId: number;
  isCorrect: boolean;
  matchId: number;
  onNewGame: () => void;
}

const GameResult: FC<GameResultProps> = ({
  heroId,
  isCorrect,
  matchId,
  onNewGame,
}) => {
  const hero = useHero(heroId);

  return (
    <div className={styles.container}>
      <h3 className={clsx(styles.result, { [styles.correct]: isCorrect })}>
        {isCorrect ? 'Correct' : 'Incorrect'}
      </h3>
      <div className={styles.hero}>
        <HeroIcon id={heroId} />
        <h3>{hero?.displayName}</h3>
      </div>
      <ul className={styles.links}>
        <li>
          <a
            href={`https://www.dotabuff.com/matches/${matchId}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            DotaBuff
          </a>
        </li>
        <li>
          <a
            href={`https://www.opendota.com/matches/${matchId}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            OpenDota
          </a>
        </li>
      </ul>
      <div className={styles.cta}>
        <button className="btn" onClick={onNewGame} type="button">
          New game
        </button>
      </div>
    </div>
  );
};

export type { GameResultProps as GameResultProps };
export default GameResult;
