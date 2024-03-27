import * as React from 'react';

import { useTooltip } from './hooks';

export type TooltipContextType = ReturnType<typeof useTooltip> | null;

export const TooltipContext = React.createContext<TooltipContextType>(null);

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context === null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};
