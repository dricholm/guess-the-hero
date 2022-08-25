import clsx from 'clsx';
import { FC } from 'react';
import { useItem } from 'src/hooks';
import styles from './ItemIcon.module.scss';

interface Props {
  id: number;
  type?: 'backpack' | 'neutral';
}

const ItemIcon: FC<Props> = ({ id, type }) => {
  const item = useItem(id);

  return (
    <img
      alt={item?.displayName ?? 'Empty slot'}
      className={clsx(styles.image, {
        [styles.backpack]: type === 'backpack',
        [styles.neutral]: type === 'neutral',
      })}
      height={64}
      src={item?.imageSrc ?? '/img/items/emptyitembg.jpg'}
      width={88}
    />
  );
};

export type { Props as ItemIconProps };
export default ItemIcon;
