import { FC, useCallback, useState } from 'react';
import ClientOnlyPortal from 'src/components/atoms/ClientOnlyPortal';
import ItemIcon from 'src/components/atoms/ItemIcon';
import type { ItemIconProps } from 'src/components/atoms/ItemIcon';
import Modal from 'src/components/atoms/Modal';
import ItemDetails from 'src/components/molecules/ItemDetails';
import styles from './ItemWithModal.module.scss';
import classNames from 'classnames';

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
        className={classNames(styles.button, {
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