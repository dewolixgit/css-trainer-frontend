import { useMergeRefs } from '@floating-ui/react';
import * as React from 'react';

import { usePopoverContext } from 'config/components/popover';

export type PopoverTriggerProps = React.HTMLProps<HTMLElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

export const PopoverTrigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
  ({ children, asChild = false, ...props }, propRef) => {
    const context = usePopoverContext();

    const childrenRef = (children as any).ref;

    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          ['data-state']: context.open ? 'open' : 'closed',
        })
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  }
);
