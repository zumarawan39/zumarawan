import classes from './modal.module.scss';
import Flex from '../Flex';
import React from 'react';

const ModalFooter: React.FC<any> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Flex
      row
      justifyFlexEnd
      className={`${classes.modalFoot} ${className}`}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default ModalFooter;
