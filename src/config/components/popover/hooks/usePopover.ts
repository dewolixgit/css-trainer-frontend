import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  arrow,
} from '@floating-ui/react';
import * as React from 'react';

import {
  POPOVER_ARROW_BOUNDARY_INDENT,
  POPOVER_OFFSET,
  POPOVER_VIEW_INDENT,
} from 'config/components/popover/config';

import { PopoverOptions } from '../types';

export const usePopover = ({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  closeOnScroll = true,
}: PopoverOptions = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const arrowRef = React.useRef<SVGSVGElement | null>(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(POPOVER_OFFSET),
      flip(),
      shift({ padding: POPOVER_VIEW_INDENT }),
      arrow({ element: arrowRef, padding: POPOVER_ARROW_BOUNDARY_INDENT }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: !controlledOpen,
  });
  const dismiss = useDismiss(context, {
    ancestorScroll: !controlledOpen && closeOnScroll,
  });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
      modal,
    }),
    [open, setOpen, interactions, data, modal]
  );
};
