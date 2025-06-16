import React from 'react';

import classes from './modal.module.scss';
import Flex from '../Flex';
import { FiX } from 'react-icons/fi';

const ModalHeader: React.FC<any> = ({
  onClose,
  className,
  children,
  titleClass,
  ...rest
}) => {
  return (
    <Flex
      row
      justifyCenter
      className={`${classes.modalHead} ${className} pos-relative`}
      {...rest}
    >
      <label className={`${classes.title} ${titleClass}`}>{children}</label>
      <a
        className={`${classes.close} absolute hover:cursor-pointer`}
        onClick={onClose}
      >
        <FiX />
      </a>
    </Flex>
  );
};

export default ModalHeader;
