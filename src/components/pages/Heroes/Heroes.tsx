import classNames from 'classnames';
import heroesJson from 'dotaconstants/build/heroes.json';
import { FC } from 'react';
import Card from 'src/components/atoms/Card';
import HeroIcon from 'src/components/atoms/HeroIcon';
import styles from './Heroes.module.scss';

const ATTRIBUTES = ['Strength', 'Agility', 'Intelligence'];

const Heroes: FC = () => (
  <div className={classNames('container', styles.container)}>
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
                <p className={styles.name}>{hero.localized_name}</p>
              </div>
            ))}
        </div>
      </Card>
    ))}
  </div>
);

export default Heroes;
