import { FC } from 'react';
import Card from 'src/components/atoms/Card';
import ItemWithModal from '../ItemWithModal';
import styles from './ItemList.module.scss';

interface Props {
  ids: number[];
  title: string;
}

const ItemList: FC<Props> = ({ ids, title }) => (
  <Card title={title}>
    <div className={styles.container}>
      {ids.map((id) => (
        <ItemWithModal id={id} key={id} />
      ))}
    </div>
  </Card>
);

export default ItemList;
