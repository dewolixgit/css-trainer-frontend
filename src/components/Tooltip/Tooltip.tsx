import * as React from 'react';

import { TooltipContext, useTooltip, UseTooltipArgs } from 'entities/components/tooltip';

type Props = UseTooltipArgs & {
  children?: React.ReactNode;
  closeOnScroll?: boolean;
};

const Tooltip: React.FC<Props> = ({ children, closeOnScroll = true, ...options }) => {
  const tooltip = useTooltip({
    closeOnScroll,
    ...options,
  });

  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
};

export default React.memo(Tooltip);
