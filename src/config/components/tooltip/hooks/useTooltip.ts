import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { TOOLTIP_OFFSET, TOOLTIP_VIEW_INDENT } from '../config';

export type UseTooltipArgs = {
  initialOpen?: boolean;
  placement?: Placement;
  closeOnScroll?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const useTooltip = ({
  initialOpen = false,
  placement = 'top',
  closeOnScroll = true,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: UseTooltipArgs = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const arrowRef = React.useRef<SVGSVGElement | null>(null);

  const { delay } = useDelayGroupContext();

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(TOOLTIP_OFFSET),
      flip(),
      shift({ padding: TOOLTIP_VIEW_INDENT }),
      arrow({ element: arrowRef }),
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    enabled: !controlledOpen,
    delay,
  });

  const focus = useFocus(context, {
    enabled: !controlledOpen,
  });

  const dismiss = useDismiss(context, {
    ancestorScroll: !controlledOpen && closeOnScroll,
  });

  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data]
  );
};
