import {
  FloatingPortal,
  useDelayGroup,
  useDelayGroupContext,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react';
import * as React from 'react';

import { useTooltipContext } from 'config/components/tooltip';

const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const state = useTooltipContext();
    const { isInstantPhase, currentId } = useDelayGroupContext();
    const ref = useMergeRefs([state.refs.setFloating, propRef]);

    useDelayGroup(state.context, { id: state.context.floatingId });

    const instantDuration = 0;
    const duration = 250;

    const { isMounted, styles } = useTransitionStyles(state.context, {
      duration: isInstantPhase
        ? {
            open: instantDuration,
            // `id` is this component's `id`
            // `currentId` is the current group's `id`
            close: currentId === state.context.floatingId ? duration : instantDuration,
          }
        : duration,
      initial: {
        opacity: 0,
      },
    });

    if (!isMounted) {
      return null;
    }

    return (
      <FloatingPortal>
        <div
          ref={ref}
          style={{
            ...state.floatingStyles,
            // eslint-disable-next-line react/prop-types
            ...props.style,
            ...styles,
          }}
          {...state.getFloatingProps(props)}
        />
      </FloatingPortal>
    );
  }
);

export default React.memo(TooltipContent);
