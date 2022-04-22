import clsx from 'clsx';
import type { FC } from 'react';
import { PropsWithChildren } from 'react';

type Props = {
  size: 'sm' | 'md' | 'lg';
  isLoading: boolean;
  isDisabled: boolean;
  isFullWidth: boolean;
  color: 'primary' | 'secondary' | 'accent';
  variant: 'default' | 'outlined';
};

export const Button: FC<Partial<PropsWithChildren<Props>>> = ({
  size = 'md',
  isLoading = false,
  isDisabled = false,
  isFullWidth = true,
  color = 'primary',
  variant = 'default',
  children,
}) => {
  return (
    <button
      className={clsx(
        'py-2 px-4 rounded transition-colors flex items-center justify-center',
        'text-white',
        color === 'primary' &&
          (variant === 'default'
            ? `bg-primary-600 hover:bg-primary-500 disabled:bg-primary-200`
            : `text-primary-600 border border-primary-500 disabled:text-primary-200`),
        isFullWidth && 'block w-full',
      )}
      disabled={isLoading || isDisabled}
    >
      {isLoading && (
        <span>
          <LoadingSVG></LoadingSVG>
        </span>
      )}
      {children}
    </button>
  );
};

const LoadingSVG = () => (
  <svg className="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
