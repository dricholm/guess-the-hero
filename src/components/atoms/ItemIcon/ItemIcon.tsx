import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import useItem from 'src/hooks/useItem';
import styles from './ItemIcon.module.scss';

export interface ItemIconProps {
  id?: number;
  loading?: boolean;
  type?: 'inventory' | 'backpack' | 'neutral';
}

const ItemIcon: FC<ItemIconProps> = ({
  id,
  loading = false,
  type = 'inventory',
}) => {
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

export default ItemIcon;
