import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './TextBox.module.scss';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'info';
}

const TextBox: FC<Props> = ({ children, variant = 'info' }) => (
  <div className={clsx(styles.container, styles[variant])}>{children}</div>
);

export default TextBox;
