import { FloatingArrow } from '@floating-ui/react';
import * as React from 'react';

import { Text } from 'components';
import { TooltipContent } from 'components/Tooltip';
import {
  TOOLTIP_ARROW_HEIGHT,
  TOOLTIP_ARROW_WIDTH,
  useTooltipContext,
} from 'entities/components/tooltip';
import { SizeEnum } from 'entities/size';

import './ThemedTooltipContent.module.scss';

const ThemedTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const { context, arrowRef } = useTooltipContext();

    return (
      <TooltipContent styleName="content" {...props} ref={ref}>
        <Text size={SizeEnum.xs}>{children}</Text>
        <FloatingArrow
          ref={arrowRef}
          context={context}
          width={TOOLTIP_ARROW_WIDTH}
          height={TOOLTIP_ARROW_HEIGHT}
          d="M19.412 30s2.469 9 17.326 9H2.085c14.222 0 17.326-9 17.326-9Z"
          styleName="arrow"
        />
      </TooltipContent>
    );
  }
);

export default React.memo(ThemedTooltipContent);
