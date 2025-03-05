import { PropsWithChildren } from 'react';
import { IDrawerProps } from './types';
import clsx from 'clsx';

export const Drawer = ({
  isOpen,
  children,
  handleClose,
  width = 'w-full',
}: PropsWithChildren<IDrawerProps>) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => handleClose()}
      />

      {/* Drawer */}
      <div
        className={clsx(
          `fixed left-0 top-0 z-50 h-full transform bg-black shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
          width
        )}
      >
        {children}
      </div>
    </>
  );
};
