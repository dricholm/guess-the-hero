import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import Button from 'src/components/atoms/Button';
import Loader from 'src/components/atoms/Loader';
import TextBox from 'src/components/atoms/TextBox';
import type { GameProps, Player } from 'src/components/pages/Game';
import Game from 'src/components/pages/Game';

const BASE_URL = 'https://api.opendota.com/api';
const PATH_PUBLIC_MATCHES = 'publicMatches';
const PATH_MATCH_DETAILS = 'matches';

type GameState =
  | {
      state: 'error' | 'loading';
    }
  | {
      state: 'ready';
      stats: GameProps['stats'];
    };

const GamePage: NextPage<GameState> = (props) => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const [state, dispatch] = useReducer(reducer, props);
  const fetchNewGame = useCallback(async () => {
    dispatch({ type: 'fetch' });
    try {
      const newMatchId = await fetchRandomMatchId();
      const matchData = await fetchMatchData(newMatchId);
      const newPlayer = fetchRandomElement(matchData.players);
      if (isMounted.current) {
        dispatch({
          payload: { matchId: newMatchId, player: newPlayer },
          type: 'success',
        });
      }
    } catch (error) {
      if (isMounted.current) {
        dispatch({ type: 'error' });
      }
    }
  }, []);
  const content = useMemo(() => {
    switch (state.state) {
      case 'error':
        return (
          <TextBox variant="primary">
            <h1>Error</h1>
            <Button onClick={fetchNewGame}>Retry</Button>
          </TextBox>
        );

      case 'loading':
        return (
          <div className="container center">
            <Loader />
          </div>
        );

      case 'ready':
        return <Game onNewGame={fetchNewGame} stats={state.stats} />;
    }
  }, [fetchNewGame, state]);

  return (
    <>
      <Head>
        <title>Dota 2 - Guess the Hero</title>
        <meta
          content="Play a quiz game of Dota 2. Guess the hero from a random match only by seeing their inventory."
          name="description"
        />
      </Head>
      {content}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<GameState> = async () => {
  try {
    const matchId = await fetchRandomMatchId();
    const matchData = await fetchMatchData(matchId);
    const player = fetchRandomElement(matchData.players);

    return {
      props: {
        state: 'ready',
        stats: {
          matchId,
          player,
        },
      },
    };
  } catch (error) {
    return { props: { state: 'error' } };
  }
};

type Action =
  | { type: 'fetch' }
  | { payload: GameProps['stats']; type: 'success' }
  | { type: 'error' };

const reducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'error':
      return { state: 'error' };

    case 'fetch':
      return { state: 'loading' };

    case 'success':
      return {
        state: 'ready',
        stats: {
          matchId: action.payload.matchId,
          player: action.payload.player,
        },
      };

    default:
      return state;
  }
};

const fetchRandomElement = <T extends unknown>(array: Array<T>): T =>
  array[Math.floor(Math.random() * array.length)];

const fetchRandomMatchId = async () => {
  const publicMatches = (await fetch(
    [BASE_URL, PATH_PUBLIC_MATCHES].join('/'),
  ).then((response) => response.json())) as Array<{ match_id: number }>;

  const { match_id: matchId } =
    publicMatches[Math.floor(Math.random() * publicMatches.length)];

  return matchId;
};

interface ApiMatchData {
  players: Array<{
    backpack_0: number;
    backpack_1: number;
    backpack_2: number;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_neutral: number;
  }>;
}

interface MatchData {
  id: number;
  players: Array<Player>;
}

const fetchMatchData = async (matchId: number): Promise<MatchData> =>
  fetch([BASE_URL, PATH_MATCH_DETAILS, matchId].join('/'))
    .then((response) => response.json())
    .then((matchData: ApiMatchData) => ({
      id: matchId,
      players: matchData.players.map((player) => {
        const items: Player['items'] = {
          backpack: [player.backpack_0, player.backpack_1, player.backpack_2],
          inventory: [
            player.item_0,
            player.item_1,
            player.item_2,
            player.item_3,
            player.item_4,
            player.item_5,
          ],
        };
        if (player.item_neutral) items.neutral = player.item_neutral;
        return { heroId: player.hero_id, items };
      }),
    }));

export default GamePage;
