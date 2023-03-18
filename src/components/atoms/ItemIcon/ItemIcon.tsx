import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { useItem } from 'src/hooks';
import styles from './ItemIcon.module.scss';

interface Props {
  id?: number;
  loading?: boolean;
  type?: 'inventory' | 'backpack' | 'neutral';
}

const ItemIcon: FC<Props> = ({ id, loading = false, type = 'inventory' }) => {
  const item = useItem(id);

  return (
    <Image
      alt={item?.displayName ?? ''}
      className={clsx(styles.image, {
        [styles.backpack]: type === 'backpack',
        [styles.neutral]: type === 'neutral',
        pulse: loading,
      })}
      height={64}
      src={item?.imageSrc ?? '/img/items/emptyitembg.jpg'}
      width={88}
    />
  );
};

export type { Props as ItemIconProps };
export default ItemIcon;
