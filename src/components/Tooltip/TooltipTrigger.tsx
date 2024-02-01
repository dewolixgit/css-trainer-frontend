import { useMergeRefs } from '@floating-ui/react';
import * as React from 'react';

import { useTooltipContext } from 'entities/components/tooltip';

const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ children, asChild = true, ...props }, propRef) => {
  const state = useTooltipContext();

  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([state.refs.setReference, propRef, childrenRef]);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        ['data-state']: state.open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button
      ref={ref}
      data-state={state.open ? 'open' : 'closed'}
      {...state.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

export default React.memo(TooltipTrigger);
