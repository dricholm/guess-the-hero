import { FC } from 'react';
import ItemIcon from 'src/components/atoms/ItemIcon/ItemIcon';
import ItemWithModal from '../ItemWithModal/ItemWithModal';
import styles from './HeroItems.module.scss';

const BACKPACK = Array.from<number>({ length: 3 });
const INVENTORY = Array.from<number>({ length: 6 });

interface HeroItemsProps {
  backpack?: number[];
  inventory?: number[];
  neutral?: number;
}

const HeroItems: FC<HeroItemsProps> = ({ backpack, inventory, neutral }) => {
  const loading = [backpack, inventory, neutral].every(
    (prop) => prop === undefined,
  );

  return (
    <div className={styles.container}>
      <div className={styles.inventory}>
        {INVENTORY.map((_, index) =>
          loading ? (
            <ItemIcon loading key={`${index}-loading`} />
          ) : (
            <ItemWithModal
              id={inventory?.[index] ?? 0}
              key={`${index}-${inventory?.[index]}`}
            />
          ),
        )}
      </div>
      {loading ? (
        <ItemIcon loading type="neutral" />
      ) : (
        <ItemWithModal id={neutral} type="neutral" />
      )}
      <div className={styles.inventory}>
        {BACKPACK.map((_, index) =>
          loading ? (
            <ItemIcon loading key={`${index}-loading`} type="backpack" />
          ) : (
            <ItemWithModal
              id={backpack?.[index] ?? 0}
              key={`${index}-${backpack?.[index]}`}
              type="backpack"
            />
          ),
        )}
      </div>
    </div>
  );
};

export default HeroItems;
