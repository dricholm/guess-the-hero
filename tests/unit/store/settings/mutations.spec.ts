import { mutations } from '@/store/settings/mutations';
import SettingsState from '@/store/settings/types';

describe('settings mutations', () => {
  it('saveSettings', () => {
    const state: SettingsState = {
      durationMax: 300,
      durationMin: 20,
      mmrMax: 9000,
      mmrMin: 2000,
    };

    mutations.saveSettings(state, {
      durationMax: 50,
      durationMin: 10,
      mmrMax: 5000,
      mmrMin: 1000,
    });

    expect(state.durationMax).toBe(50);
    expect(state.durationMin).toBe(10);
    expect(state.mmrMax).toBe(5000);
    expect(state.mmrMin).toBe(1000);
  });
});
