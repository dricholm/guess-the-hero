import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

const Card: FC<CardProps> = ({ children, className, title }) => (
  <div className={clsx(styles.container, className)}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.body}>{children}</div>
  </div>
);

export default Card;
