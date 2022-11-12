'use client';
// So API request is from the client to avoid reaching limit

import { useCallback, useEffect, useReducer } from 'react';
import Game from 'src/components/pages/Game';
import Loading from '../loading';
import {
  fetchMatchData,
  fetchPublicMatches,
  getRandomElement,
  parseMatchData,
} from './logic';
import { gameReducer, GAME_INITIAL_STATE } from './reducer';

const GamePage = () => {
  const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);

  const fetchData = useCallback(async () => {
    dispatch({ type: 'fetch' });
    try {
      const publicMatches = await fetchPublicMatches();
      const { match_id: matchId } = getRandomElement(publicMatches);
      const apiData = await fetchMatchData(matchId);
      const matchData = parseMatchData(apiData);
      const player = getRandomElement(matchData.players);
      dispatch({ payload: { matchId, player }, type: 'success' });
    } catch (error) {
      dispatch({ payload: { error }, type: 'error' });
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  switch (state.state) {
    case 'error':
      throw state.error;

    case 'loading':
      return <Loading />;

    case 'ready':
      return <Game onNewGame={fetchData} stats={state.stats} />;
  }
};

export default GamePage;
