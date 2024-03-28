import { Placement } from '@floating-ui/react';

export type PopoverOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnScroll?: boolean;
};
