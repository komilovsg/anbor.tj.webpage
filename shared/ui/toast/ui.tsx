'use client';
import { useState, useEffect } from 'react';
import { IToastProps } from './types';
import { createPortal } from 'react-dom';

const Toast = ({ message, type = 'info' }: IToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const typeClasses: Record<string, string> = {
    success: 'bg-green',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return createPortal(
    <div
      className={`fixed left-[50%] top-0 z-[999999] -translate-x-[50%] translate-y-[-100%] opacity-0 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-[20px] opacity-100' : ''} rounded-xl px-10 py-4 text-center text-sm text-white shadow-lg md:w-full md:rounded-none md:text-xs ${typeClasses[type]}`}
    >
      {message}
    </div>,
    document.body
  );
};

export default Toast;
