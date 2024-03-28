import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react';
import * as React from 'react';

import { usePopoverContext } from 'config/components/popover';

export const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  // eslint-disable-next-line react/prop-types
  ({ style, ...props }, propRef) => {
    const { context: floatingContext, ...context } = usePopoverContext();

    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    const { isMounted, styles: transitionStyles } = useTransitionStyles(floatingContext, {
      duration: 250,
      initial: {
        opacity: 0,
      },
    });

    if (!isMounted) {
      return null;
    }

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            style={{
              ...context.floatingStyles,
              ...style,
              ...transitionStyles,
            }}
            {...context.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);
