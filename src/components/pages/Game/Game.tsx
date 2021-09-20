import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';
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
  onNewGame: () => void;
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
  const [isCorrect, setIsCorrect] = useState<GameResultProps['isCorrect']>();
  const handleSubmit = useCallback<HeroSelectProps['onSubmit']>(
    (selectedHeroId) => {
      setIsCorrect(heroId === selectedHeroId);
    },
    [heroId],
  );

  return (
    <div className={classNames('container', styles.container)}>
      {isCorrect !== undefined && (
        <div className={styles.results}>
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
