import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import * as React from 'react';

export type UnStyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

export const UnStyledLink = React.forwardRef<HTMLAnchorElement, UnStyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab = openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a ref={ref} target="_blank" rel="noopener noreferrer" href={href} {...rest} className={clsx(className)}>
        {children}
      </a>
    );
  },
);
