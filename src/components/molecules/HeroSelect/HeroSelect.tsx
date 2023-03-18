'use client';

import { FC, FormEventHandler, Fragment, useCallback, useState } from 'react';
import HeroIcon from 'src/components/atoms/HeroIcon/HeroIcon';
import useHero from 'src/hooks/useHero';
import styles from './HeroSelect.module.scss';

export interface HeroSelectProps {
  disabled?: boolean;
  heroIds?: number[];
  onSubmit: (id: number) => void;
}

const HeroSelect: FC<HeroSelectProps> = ({
  heroIds,
  disabled = false,
  onSubmit,
}) => {
  const loading = heroIds === undefined;
  const [selectedId, setSelectedId] = useState<number>();
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      if (!selectedId) return;
      onSubmit(selectedId);
      setSelectedId(undefined);
    },
    [onSubmit, selectedId],
  );
  const selectedHero = useHero(selectedId);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.heroes}>
        {Array.from({ length: heroIds?.length ?? 10 }).map((_, index) => {
          if (loading) return <HeroIcon key={`${index}-loading`} loading />;
          const heroId = heroIds[index];
          return (
            <HeroSelectIcon
              checked={selectedId === heroId}
              disabled={disabled}
              heroId={heroId}
              key={heroId}
              onSelect={setSelectedId}
            />
          );
        })}
      </div>

      <div className={styles.cta}>
        <button
          className="btn btn-lg"
          disabled={disabled || loading}
          type="submit"
        >
          {selectedHero
            ? `Select ${selectedHero.displayName}`
            : 'Choose a hero'}
        </button>
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

export default HeroSelect;
