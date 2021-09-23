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
        {Object.values(heroesJson)
          .filter(
            (hero) =>
              hero.primary_attr === attribute.substr(0, 3).toLowerCase(),
          )
          .sort((heroA, heroB) =>
            heroA.localized_name.localeCompare(heroB.localized_name),
          )
          .map((hero) => (
            <HeroIcon id={hero.id} key={hero.id} />
          ))}
      </Card>
    ))}
  </div>
);

export default Heroes;