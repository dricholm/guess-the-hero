import heroesJson from 'dotaconstants/build/heroes.json';
import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Button from 'src/components/atoms/Button';
import HeroIcon from 'src/components/atoms/HeroIcon';
import { useHero } from 'src/hooks';
import styles from './HeroSelect.module.scss';

const HEROES = Object.values(heroesJson).sort((heroA, heroB) =>
  heroA.localized_name.localeCompare(heroB.localized_name),
);

const isHeroShown = (name: string, filter: string) =>
  name.toLowerCase().includes(filter.toLowerCase());

interface Props {
  isDisabled?: boolean;
  onSubmit: (id?: number) => void;
}

const HeroSelect: FC<Props> = ({ isDisabled = false, onSubmit }) => {
  const [selectedId, setSelectedId] = useState<number>();
  const [heroFilter, setHeroFilter] = useState('');
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      if (!selectedId) return;
      onSubmit(selectedId);
    },
    [onSubmit, selectedId],
  );
  const handleFilterChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setHeroFilter(event.currentTarget.value);
    },
    [],
  );
  const filteredHeroes = useMemo(
    () => HEROES.filter((hero) => isHeroShown(hero.localized_name, heroFilter)),
    [heroFilter],
  );
  const selectedHero = useHero(selectedId);
  useEffect(() => {
    if (
      !heroFilter ||
      !selectedHero ||
      isHeroShown(selectedHero.displayName, heroFilter)
    ) {
      return;
    }
    setSelectedId(undefined);
  }, [heroFilter, selectedHero]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.name}>
        Filter by name
        <input
          className={styles.filter}
          disabled={isDisabled}
          onChange={handleFilterChange}
          placeholder="Start typing a hero name"
          type="text"
          value={heroFilter}
        />
      </label>
      {filteredHeroes.length ? (
        <div className={styles.heroes}>
          {filteredHeroes.map((hero) => (
            <HeroSelectIcon
              checked={selectedId === hero.id}
              disabled={isDisabled}
              heroId={hero.id}
              key={hero.id}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      ) : (
        <div className={styles['no-heroes']}>No heroes match the filter.</div>
      )}

      <div className={styles.cta}>
        <Button disabled={isDisabled} size="large" type="submit">
          {selectedHero
            ? `Select ${selectedHero.displayName}`
            : 'Choose a hero'}
        </Button>
      </div>
    </form>
  );
};

interface HeroSelectIconProps {
  checked: boolean;
  disabled?: boolean;
  heroId: number;
  onSelect: (heroId: number) => void;
}

const HeroSelectIcon: FC<HeroSelectIconProps> = ({
  checked,
  disabled = false,
  heroId,
  onSelect,
}) => {
  const handleChange = useCallback(() => {
    onSelect(heroId);
  }, [heroId, onSelect]);
  const htmlId = `hero-${heroId}`;

  return (
    <Fragment key={heroId}>
      <input
        checked={checked}
        disabled={disabled}
        className={styles.radio}
        id={htmlId}
        name="hero"
        onChange={handleChange}
        type="radio"
      />
      <label className={styles['hero-label']} htmlFor={htmlId}>
        <HeroIcon id={heroId} />
      </label>
    </Fragment>
  );
};

export type { Props as HeroSelectProps };
export default HeroSelect;
