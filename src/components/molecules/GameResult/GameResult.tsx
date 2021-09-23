import classNames from 'classnames';
import { FC } from 'react';
import Button from 'src/components/atoms/Button';
import HeroIcon from 'src/components/atoms/HeroIcon';
import { useHero } from 'src/hooks';
import styles from './GameResult.module.scss';

interface Props {
  heroId: number;
  isCorrect: boolean;
  matchId: number;
  onNewGame: () => void;
}

const GameResult: FC<Props> = ({ heroId, isCorrect, matchId, onNewGame }) => {
  const hero = useHero(heroId);

  return (
    <div className={styles.container}>
      <h3
        className={classNames(styles.result, { [styles.correct]: isCorrect })}
      >
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
        <Button onClick={onNewGame}>New game</Button>
      </div>
    </div>
  );
};

export type { Props as GameResultProps };
export default GameResult;