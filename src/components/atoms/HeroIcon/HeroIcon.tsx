import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { useHero } from 'src/hooks';
import styles from './HeroIcon.module.scss';

interface HeroIconProps {
  hasAlt?: boolean;
  id?: number;
  loading?: boolean;
}

const ItemIcon: FC<HeroIconProps> = ({
  hasAlt = true,
  id,
  loading = false,
}) => {
  const hero = useHero(id);

  return hero ? (
    <Image
      alt={hasAlt ? hero.displayName : ''}
      className={styles.container}
      height={72}
      src={hero.imageSrc}
      width={128}
    />
  ) : (
    <div className={clsx(styles.container, { pulse: loading })} />
  );
};

export default ItemIcon;
