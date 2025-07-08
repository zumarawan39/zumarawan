'use client';

import { CSSProperties, FC, ReactNode } from 'react';
import Styles from './button.module.scss';
// import { ButtonProps } from "@/utils/types";
import { Link } from '@/libs/i18nNavigation';
import Loading from '../Loading';
// Default values shown


// Default values shown
interface ButtonProps {
  as?: 'button' | 'navLink' | 'a';
  htmlType?: 'button' | 'submit' | 'reset';
  type?:
    | 'Primary'
    | 'Danger'
    | 'Secondary'
    | 'Success'
    | 'Warning'
    | 'PrimaryOutline'
    | 'SecondaryOutline'
    | 'DangerOutline'
    | 'Action';
  backgroundColor?: CSSProperties;
  size?: 'Small' | 'Medium' | 'Large' | 'XSmall';
  className?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  textColor?: string;
  icon?: ReactNode | null;
  to?: string;
  isAnimate?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const Button: FC<ButtonProps> = ({
  as = 'button',
  htmlType = 'button',
  type = 'Primary',
  backgroundColor,
  size = 'Medium',
  className,
  children,
  loading = false,
  disabled = false,
  textColor = undefined,
  icon = null,
  isAnimate = false,
  ...rest
}) => {
  return as === 'button' ? (
    <button
      type={htmlType}
      className={[
        Styles.button,
        Styles[size],
        Styles[type],
        isAnimate && Styles.animate,
        className,
      ].join(' ')}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor as string }
          : undefined
      }
      disabled={loading || disabled}
      {...rest}
    >
      {icon && textColor && (
        <span className={`mr-1.5  ${Styles[textColor as keyof typeof Styles] ?? ''}`}>
          {icon}
        </span>
      )}
      {!loading && <span className="text-white">{children}</span>}
      {loading && (
        <div>
          <Loading />
        </div>
      )}
    </button>
  ) : as === 'navLink' ? (
    <Link
      className={[
        Styles.button,
        Styles.link,
        Styles[size],
        Styles[type],
        className,
        disabled && Styles.disabled,
      ].join(' ')}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor as string }
          : undefined
      }
      {...rest}
      href={rest.to || '#'}
    >
      {!loading && (
        <span className="text-white flex items-center justify-between">
          {icon && (
            <span className={`mr-1.5 mt-1 ${Styles[textColor as keyof typeof Styles] ?? ''}`}>{icon}</span>
          )}{' '}
          <span className={Styles[textColor as keyof typeof Styles] ?? ''}>{children}</span>
        </span>
      )}
      {loading && (
        <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent my-4"></div>
      )}
    </Link>
  ) : (
    <a
      className={[
        Styles.button,
        Styles.link,
        Styles[size],
        Styles[type],
        className,
        disabled && Styles.disabled,
      ].join(' ')}
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor as string }
          : undefined
      }
      {...rest}
    >
      {!loading && (
        <span className="text-white flex items-center justify-between">
          {icon && (
            <span
              className={`mr-1.5 mt-1 ${textColor}  ${
                textColor !== 'danger' ? Styles.primary : Styles.danger
              }`}
            >
              {icon}
            </span>
          )}{' '}
          <span className={textColor}>{children}</span>
        </span>
      )}
      {loading && (
        <div className="animate-spin h-6 w-6 rounded-full border-3 border-primary border-t-transparent"></div>
      )}
    </a>
  );
};

export default Button;
