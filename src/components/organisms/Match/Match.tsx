import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import Card from 'src/components/atoms/Card/Card';
import GameResult from 'src/components/molecules/GameResult/GameResult';
import HeroItems from 'src/components/molecules/HeroItems/HeroItems';
import HeroSelect, {
  HeroSelectProps,
} from 'src/components/molecules/HeroSelect/HeroSelect';
import { fetchMatchData } from 'src/data/api';
import styles from './Match.module.scss';

interface Props {
  id?: number;
  onNext: VoidFunction;
}

const Match: React.FC<Props> = ({ id, onNext }) => {
  const { data, error } = useQuery({
    enabled: Boolean(id),
    queryFn: () => fetchMatchData(id),
    queryKey: ['match', id],
    refetchOnWindowFocus: false,
  });
  const playerToGuess = useMemo(
    () =>
      data?.players.reduce((prev, current) =>
        prev.net_worth > current.net_worth ? prev : current,
      ),
    [data?.players],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [correct, setCorrect] = useState<boolean>();
  useEffect(() => {
    if (id) setCorrect(undefined);
  }, [id]);
  useEffect(() => {
    if (resultRef.current && correct !== undefined) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [correct]);

  if (error) throw error;

  const handleSubmit: HeroSelectProps['onSubmit'] = (heroId) => {
    setCorrect(heroId === playerToGuess?.hero_id);
  };
  const hasSubmitted = correct !== undefined;

  const handleNext = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    onNext();
  };

  return (
    <div className={clsx('container', styles.container)} ref={containerRef}>
      <Card title="Inventory">
        <HeroItems
          backpack={
            playerToGuess
              ? [
                  playerToGuess.backpack_0,
                  playerToGuess.backpack_1,
                  playerToGuess.backpack_2,
                ]
              : undefined
          }
          inventory={
            playerToGuess
              ? [
                  playerToGuess.item_0,
                  playerToGuess.item_1,
                  playerToGuess.item_2,
                  playerToGuess.item_3,
                  playerToGuess.item_4,
                  playerToGuess.item_5,
                ]
              : undefined
          }
          neutral={playerToGuess?.item_neutral}
        />
      </Card>

      <Card title="Heroes">
        <HeroSelect
          heroIds={data?.players.map((player) => player.hero_id)}
          disabled={hasSubmitted}
          onSubmit={handleSubmit}
        />
      </Card>

      {id && hasSubmitted && playerToGuess && (
        <Card className={styles.results} title="Results">
          <div ref={resultRef}>
            <GameResult
              heroId={playerToGuess.hero_id}
              isCorrect={correct}
              matchId={id}
              onNewGame={handleNext}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default Match;
