import * as React from 'react';

import { PopoverContext, usePopover, PopoverOptions } from 'config/components/popover';

export type PopoverProps = PopoverOptions & {
  children: React.ReactNode;
};

// Fixme: Fix a bug when it scrolls to the beginning of the page
//  if the user overscrolls the popover while it's disappearing
const Popover = ({ children, modal = false, ...restOptions }: PopoverProps) => {
  const popover = usePopover({
    modal,
    ...restOptions,
  });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};

export default Popover;
