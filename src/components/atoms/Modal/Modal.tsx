import { FC, MouseEventHandler, ReactNode, useCallback, useRef } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  onClose: VoidFunction;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleClick = useCallback<MouseEventHandler>(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <div className={styles.container} onClick={handleClick} ref={container}>
      <button
        aria-label="Close modal"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        &times;
      </button>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
