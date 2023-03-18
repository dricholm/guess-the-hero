'use client';

import clsx from 'clsx';
import { FC, useCallback, useState } from 'react';
import ClientOnlyPortal from 'src/components/atoms/ClientOnlyPortal/ClientOnlyPortal';
import ItemIcon, {
  ItemIconProps,
} from 'src/components/atoms/ItemIcon/ItemIcon';
import Modal from 'src/components/atoms/Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import styles from './ItemWithModal.module.scss';

const ItemWithModal: FC<ItemIconProps> = ({ id, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!id) {
    return <ItemIcon id={id} type={type} />;
  }

  return (
    <>
      <button
        className={clsx(styles.button, {
          [styles.neutral]: type === 'neutral',
        })}
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
      >
        <ItemIcon id={id} type={type} />
      </button>
      {id && isOpen && (
        <ClientOnlyPortal>
          <Modal onClose={handleClose}>
            <ItemDetails id={id} />
          </Modal>
        </ClientOnlyPortal>
      )}
    </>
  );
};

export default ItemWithModal;
