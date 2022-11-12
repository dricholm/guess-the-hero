import { Reducer } from 'react';
import { GameProps } from 'src/components/pages/Game';

export type GameState =
  | {
      state: 'loading';
    }
  | {
      error: unknown;
      state: 'error';
    }
  | {
      state: 'ready';
      stats: GameProps['stats'];
    };

export const GAME_INITIAL_STATE: GameState = { state: 'loading' };

export type GameAction =
  | { type: 'fetch' }
  | { payload: GameProps['stats']; type: 'success' }
  | { payload: { error: unknown }; type: 'error' };

export const gameReducer: Reducer<GameState, GameAction> = (state, action) => {
  switch (action.type) {
    case 'error':
      return { error: action.payload.error, state: 'error' };

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
