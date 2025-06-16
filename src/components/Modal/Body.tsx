import React from 'react';
import classes from './modal.module.scss';
import Flex from '../Flex';


const ModalBody: React.FC<any> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <Flex
      row
      justifyBetween
      className={`${classes.modalBody} ${className}`}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default ModalBody;
