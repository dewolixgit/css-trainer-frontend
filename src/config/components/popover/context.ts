import * as React from 'react';

import { usePopover } from './hooks';

type ContextType = ReturnType<typeof usePopover> | null;

export const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context === null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};
