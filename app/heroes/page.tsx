import clsx from 'clsx';
import heroesJson from 'dotaconstants/build/heroes.json';
import { Metadata } from 'next';
import { FC } from 'react';
import Card from 'src/components/atoms/Card/Card';
import HeroIcon from 'src/components/atoms/HeroIcon/HeroIcon';
import styles from './styles.module.scss';

const Heroes: FC = () => (
  <div className={clsx('container', styles.container)}>
    {ATTRIBUTES.map((attribute) => (
      <Card key={attribute.value} title={attribute.name}>
        <div className={styles.grid}>
          {Object.values(heroesJson)
            .filter((hero) => hero.primary_attr === attribute.value)
            .sort((heroA, heroB) =>
              heroA.localized_name.localeCompare(heroB.localized_name),
            )
            .map((hero) => (
              <div className={styles.hero} key={hero.id}>
                <HeroIcon hasAlt={false} id={hero.id} />
                {hero.localized_name}
              </div>
            ))}
        </div>
      </Card>
    ))}
  </div>
);

export const metadata: Metadata = {
  description: "See all of Dota 2's heroes.",
  title: 'Dota 2 heroes - Guess the Hero',
};

const ATTRIBUTES: { name: string; value: string }[] = [
  { name: 'Strength', value: 'str' },
  { name: 'Agility', value: 'agi' },
  { name: 'Intelligence', value: 'int' },
  { name: 'Universal', value: 'all' },
];

export default Heroes;
