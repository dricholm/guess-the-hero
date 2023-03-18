import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  title?: string;
}

const Card: FC<CardProps> = ({ children, title }) => (
  <div className={styles.container}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.body}>{children}</div>
  </div>
);

export default Card;
