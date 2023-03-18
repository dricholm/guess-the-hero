import { FC } from 'react';
import Card from 'src/components/atoms/Card/Card';
import ItemWithModal from '../ItemWithModal/ItemWithModal';
import styles from './ItemList.module.scss';

interface ItemListProps {
  ids: number[];
  title: string;
}

const ItemList: FC<ItemListProps> = ({ ids, title }) => (
  <Card title={title}>
    <div className={styles.container}>
      {ids.map((id) => (
        <ItemWithModal id={id} key={id} />
      ))}
    </div>
  </Card>
);

export default ItemList;
