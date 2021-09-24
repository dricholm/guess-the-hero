import classNames from 'classnames';
import { FC } from 'react';
import styles from './TextBox.module.scss';

interface Props {
  variant?: 'primary' | 'info';
}

const TextBox: FC<Props> = ({ children, variant = 'info' }) => (
  <div className={classNames(styles.container, styles[variant])}>
    {children}
  </div>
);

export default TextBox;
