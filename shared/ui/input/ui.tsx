import { useId } from 'react';
import { IInputProps } from './types';
import clsx from 'clsx';

export const Input = ({
  disabled,
  className,
  value,
  label,
  onChange,
  placeholder,
  type = 'text',
  name,
  checked,
}: IInputProps) => {
  const id: string = useId();

  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-black">
          {label}
        </label>
        <textarea
          id={id}
          disabled={disabled}
          name={name}
          value={value as string}
          rows={4}
          placeholder={placeholder}
          onChange={(event) => onChange(event)}
          className={clsx(
            'rounded-xl bg-white p-4 text-black outline-none md:rounded-[9px] md:p-3 md:text-sm',
            className
          )}
        />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked} // ✅ Используем checked вместо value
          disabled={disabled}
          onChange={onChange}
          className={clsx('h-5 w-5 cursor-pointer', className)}
        />
        <label htmlFor={id} className="cursor-pointer text-sm text-white">
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-black">
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        name={name}
        type={type}
        value={value as string} // value только для текстовых полей
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          'rounded-xl bg-white p-4 text-black outline-none md:rounded-[9px] md:p-3 md:text-sm',
          className
        )}
      />
    </div>
  );
};
