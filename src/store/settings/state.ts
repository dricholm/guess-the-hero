import SettingsState from '@/store/settings/types';

export default (): SettingsState => {
  const localStorageOptions = localStorage.getItem('settings');
  if (localStorageOptions === null) {
    return {
      durationMax: 300,
      durationMin: 20,
      gameMode: 0,
      mmrMax: 9000,
      mmrMin: 2000,
    };
  }

  return JSON.parse(localStorageOptions);
};
