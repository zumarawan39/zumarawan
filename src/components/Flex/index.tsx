import * as React from 'react';
import { ReactNode } from 'react';
import classes from './flex.module.scss';
import { JSX } from 'react';

/**
 * Flex Box
 * @param {children} content e.g any HTML
 * @param {className} css class applies to root element e.g Flex
 * All Flex Properties
 * @param { flex }
 * @param { inline }
   Direction 
 * @param { row }
 * @param { rReverse }
 * @param { column }
 * @param { cReverse }
   Fill
 * @param { fill }
   Wrap
 * @param { nowrap }
 * @param { wrap }
 * @param { wrapReverse }
   Justify Content
 * @param { justifyStart }
 * @param { justifyEnd }
 * @param { justifyCenter }
 * @param { justifyBetween }
 * @param { justifyAround }
   Align Items
 * @param { itemsStart }
 * @param { itemsEnd }
 * @param { itemsCenter }
 * @param { itemsBaseline }
 * @param { itemsStretch }
   Align Self
 * @param { selfStart }
 * @param { selfEnd }
 * @param { selfCenter }
 * @param { selfBaseline }
 * @param { selfStretch }
   Align Content
 * @param { contentStart }
 * @param { contentEnd }
 * @param { contentCenter }
 * @param { contentAround }
 * @param { contentStretch }
   Responcive
 * @param { xs }
 * @param { sm }
 * @param { md }
 * @param { lg }
 * @param { xl }
 */

interface FlexProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  [key: string]: unknown;
}

const Flex: React.FC<FlexProps> = ({
  children,
  as = 'div',
  className,
  ...rest
}) => {
  const styles = Object.keys(rest).reduce(
    (style, css) => `${style} ${classes[css]}`,
    `${classes.flex}`
  );

  return (
    <div className={`${styles} ${className || ''}`.trim()}>{children}</div>
  );
};

export default Flex;
