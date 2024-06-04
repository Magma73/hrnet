import React from 'react';
import { createPortal } from 'react-dom';
import {Modal} from '@magma73/modal-react-typescript';
import styles from './Modal.module.css'; 

interface ModalComponentProps {
  showModal: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ showModal, closeModal }) => {
  if (!showModal) return null; // If false, do not return the modal

  return createPortal(
    <Modal
      onClose={closeModal}
      customModal={styles.modalContent}
      customContainerInformations={styles.containerInformations}
      customTitle={styles.title}
      customBtnClose={styles.btnClose}
      customIconClose={styles.picture}
      title="Employee Created"
      titleClose="Close"
    />,
    document.body
  );
};

export default ModalComponent;
