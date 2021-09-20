import { FC, MouseEventHandler, useCallback, useRef } from 'react';
import styles from './Modal.module.scss';

interface Props {
  close: VoidFunction;
}

const Modal: FC<Props> = ({ children, close }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleClick = useCallback<MouseEventHandler>(
    (event) => {
      if (event.target === event.currentTarget) {
        close();
      }
    },
    [close],
  );

  return (
    <div className={styles.container} onClick={handleClick} ref={container}>
      <button
        aria-label="Close modal"
        className={styles.close}
        onClick={close}
        type="button"
      >
        &times;
      </button>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
