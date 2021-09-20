import heroesJson from 'dotaconstants/build/heroes.json';
import { renderHook } from '@testing-library/react-hooks';
import { useHero } from '.';

describe('useHero', () => {
  it('should return null for ID 0', () => {
    const { result } = renderHook(() => useHero(0));

    expect(result.current).toBeNull();
  });

  it('should return correct hero', () => {
    const id = 1;
    const hero = heroesJson['1'];

    const { result } = renderHook(() => useHero(1));

    expect(result.current).toEqual({
      displayName: hero.localized_name,
      id,
      imageSrc: `/img/heroes/${hero.name.replace('npc_dota_hero_', '')}.jpg`,
    });
  });
});
