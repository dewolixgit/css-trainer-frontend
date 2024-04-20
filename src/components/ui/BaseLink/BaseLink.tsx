import * as React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>;

const BaseLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <a target="_blank" rel="noreferrer noopener" className={className} ref={ref} {...rest}>
        {children}
      </a>
    );
  }
);

export default BaseLink;
