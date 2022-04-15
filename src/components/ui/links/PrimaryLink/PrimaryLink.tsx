import { UnStyledLink, UnStyledLinkProps } from '@/components/ui/links/UnstyledLink';
import clsx from 'clsx';
import React from 'react';

type Props = {};

export const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnStyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnStyledLink
        ref={ref}
        {...rest}
        className={clsx(
          'inline-flex items-center',
          'font-medium text-primary-600 hover:text-primary-500',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          className,
        )}
      >
        {children}
      </UnStyledLink>
    );
  },
);
