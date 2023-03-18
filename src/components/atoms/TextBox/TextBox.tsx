import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './TextBox.module.scss';

interface TextBoxProps {
  children?: ReactNode;
  variant?: 'primary' | 'info';
}

const TextBox: FC<TextBoxProps> = ({ children, variant = 'info' }) => (
  <div className={clsx(styles.container, styles[variant])}>{children}</div>
);

export default TextBox;
