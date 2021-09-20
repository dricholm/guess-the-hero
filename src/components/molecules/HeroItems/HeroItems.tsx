import { FC } from 'react';
import ItemWithModal from '../ItemWithModal';
import styles from './HeroItems.module.scss';

const BACKPACK = Array.from<number>({ length: 3 });
const INVENTORY = Array.from<number>({ length: 6 });

interface Props {
  backpack?: Array<number>;
  inventory?: Array<number>;
  neutral?: number;
}

const HeroItems: FC<Props> = ({
  backpack = BACKPACK,
  inventory = INVENTORY,
  neutral = 0,
}) => (
  <div className={styles.container}>
    <div className={styles.inventory}>
      {INVENTORY.map((_, index) => (
        <ItemWithModal id={inventory[index] ?? 0} key={index} />
      ))}
    </div>
    <ItemWithModal id={neutral} type="neutral" />
    <div className={styles.inventory}>
      {BACKPACK.map((_, index) => (
        <ItemWithModal id={backpack[index] ?? 0} key={index} type="backpack" />
      ))}
    </div>
  </div>
);

export type { Props as HeroItemsProps };
export default HeroItems;
