import { heroes } from 'dotaconstants';
import { useMemo } from 'react';

interface Hero {
  displayName: string;
  id: number;
  imageSrc: string;
}

const useHero = (id?: number): Hero | null =>
  useMemo<Hero | null>(() => {
    if (!id) return null;
    const hero = heroes[id.toString() as keyof typeof heroes] as
      | { localized_name: string; name: string }
      | undefined;
    if (!hero) return null;
    return {
      displayName: hero.localized_name,
      id,
      imageSrc: `/img/heroes/${hero.name.replace('npc_dota_hero_', '')}.jpg`,
    };
  }, [id]);

export default useHero;
