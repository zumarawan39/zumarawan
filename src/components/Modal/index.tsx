import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '@/hooks/usePortal';

const Modal: React.FC<any> = ({ size, id, className, children }) => {
  const portal = usePortal(id, className, size);

  return createPortal(children, portal);
};

export default Modal;
