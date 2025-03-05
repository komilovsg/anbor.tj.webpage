'use client';
import { PropsWithChildren } from 'react';
import { IButtonProps } from './types';
import clsx from 'clsx';

export const Button = ({
  children,
  endIcon,
  startIcon,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  onClick = () => null,
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'flex cursor-pointer items-center justify-center gap-1 rounded-xl p-2 text-lg font-medium disabled:cursor-not-allowed disabled:!bg-black/50',
        [
          variant === 'contained'
            ? color === 'primary' && 'bg-primary text-white'
            : 'border border-primary text-primary',
        ],
        [
          variant === 'contained'
            ? color === 'secondary' && 'bg-white text-black'
            : 'border border-white !text-white',
        ],
        [className]
      )}
      disabled={disabled}
    >
      {startIcon} {children} {endIcon}
    </button>
  );
};
