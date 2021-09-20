import { FC } from 'react';
import styles from './TextBox.module.scss';

const TextBox: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default TextBox;
