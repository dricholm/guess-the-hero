import clsx from 'clsx';
import heroesJson from 'dotaconstants/build/heroes.json';
import { FC } from 'react';
import Card from 'src/components/atoms/Card';
import HeroIcon from 'src/components/atoms/HeroIcon';
import styles from './styles.module.scss';

const ATTRIBUTES = ['Strength', 'Agility', 'Intelligence'];

const Heroes: FC = () => (
  <div className={clsx('container', styles.container)}>
    {ATTRIBUTES.map((attribute) => (
      <Card key={attribute} title={attribute}>
        <div className={styles.grid}>
          {Object.values(heroesJson)
            .filter(
              (hero) =>
                hero.primary_attr === attribute.substr(0, 3).toLowerCase(),
            )
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

export default Heroes;
