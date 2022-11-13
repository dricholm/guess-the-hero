'use client';

import clsx from 'clsx';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Card from 'src/components/atoms/Card';
import type { GameResultProps } from 'src/components/molecules/GameResult';
import GameResult from 'src/components/molecules/GameResult';
import type { HeroItemsProps } from 'src/components/molecules/HeroItems';
import HeroItems from 'src/components/molecules/HeroItems';
import type { HeroSelectProps } from 'src/components/molecules/HeroSelect';
import HeroSelect from 'src/components/molecules/HeroSelect';
import styles from './Game.module.scss';

interface Player {
  heroId: number;
  items: HeroItemsProps;
}

interface Props {
  onNewGame: VoidFunction;
  stats: {
    matchId: number;
    player: Player;
  };
}

const Game: FC<Props> = ({
  onNewGame,
  stats: {
    matchId,
    player: { heroId, items },
  },
}) => {
  const resultRef = useRef<HTMLDivElement>(null);
  const [isCorrect, setIsCorrect] = useState<GameResultProps['isCorrect']>();
  const handleSubmit = useCallback<HeroSelectProps['onSubmit']>(
    (selectedHeroId) => {
      setIsCorrect(heroId === selectedHeroId);
    },
    [heroId],
  );
  useEffect(() => {
    if (resultRef.current && isCorrect !== undefined) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isCorrect]);

  return (
    <div className={clsx('container', styles.container)}>
      {isCorrect !== undefined && (
        <div className={styles.results} ref={resultRef}>
          <Card title="Results">
            <GameResult
              heroId={heroId}
              isCorrect={isCorrect}
              matchId={matchId}
              onNewGame={onNewGame}
            />
          </Card>
        </div>
      )}
      <div className={styles.grid}>
        <div>
          <Card title="Inventory">
            <HeroItems {...items} />
          </Card>
        </div>
        <div>
          <Card title="Heroes">
            <HeroSelect
              isDisabled={isCorrect !== undefined}
              onSubmit={handleSubmit}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export type { Player, Props as GameProps };
export default Game;
