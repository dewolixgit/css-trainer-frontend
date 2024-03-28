import { FloatingArrow } from '@floating-ui/react';
import * as React from 'react';

import { PopoverContent } from 'components/Popover';
import {
  usePopoverContext,
  POPOVER_ARROW_HEIGHT,
  POPOVER_ARROW_WIDTH,
} from 'config/components/popover';

import './ThemedPopoverContent.module.scss';

const ThemedPopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const { context, arrowRef } = usePopoverContext();

    return (
      <PopoverContent styleName="content" {...props} ref={ref}>
        {children}
        <FloatingArrow
          ref={arrowRef}
          context={context}
          width={POPOVER_ARROW_WIDTH}
          height={POPOVER_ARROW_HEIGHT}
          d="M19.412 30s2.469 9 17.326 9H2.085c14.222 0 17.326-9 17.326-9Z"
          styleName="arrow"
        />
      </PopoverContent>
    );
  }
);

export default ThemedPopoverContent;
