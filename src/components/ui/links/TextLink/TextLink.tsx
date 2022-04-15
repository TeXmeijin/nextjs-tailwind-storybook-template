import { UnStyledLinkProps, UnStyledLink } from '@/components/ui/links/UnstyledLink';
import clsx from 'clsx';
import React from 'react';

export const TextLink = React.forwardRef<HTMLAnchorElement, UnStyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnStyledLink
        ref={ref}
        {...rest}
        className={clsx(
          'animated-underline inline-flex items-center font-semibold',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          className,
        )}
      >
        {children}
      </UnStyledLink>
    );
  },
);
