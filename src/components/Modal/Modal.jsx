import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';
import ModalContainer from './ModalContainer';

function Modal({ isOpen, onClose }) {
  return (
    <>
      <AnimatePresence>
        {isOpen
        && (
        <>
          <Backdrop />
          <ModalContainer isOpen={isOpen} onClose={onClose} />
        </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
