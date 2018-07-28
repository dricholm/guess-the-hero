import { actions } from '@/store/settings/actions';

describe('actions', () => {
  it('saveStorage', () => {
    const commit = jest.fn();
    const state = {
      durationMax: 300,
      durationMin: 20,
      gameMode: 0,
      mmrMax: 9000,
      mmrMin: 2000,
    };

    // TODO: Resolve testing an action in TypeScript
    // @ts-ignore
    actions.saveStorage(
      { commit, state },
      {
        durationMax: 10,
        durationMin: 200,
        gameMode: 1,
        mmrMax: '',
        mmrMin: 10,
      }
    );

    expect(commit).toHaveBeenCalledWith('saveSettings', {
      durationMax: 200,
      durationMin: 10,
      gameMode: 1,
      mmrMax: 9999,
      mmrMin: 10,
    });
  });
});
