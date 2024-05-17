import cn from 'classnames';
import * as React from 'react';

import { ElementSvgWrapper } from 'models/exersices/SetSelectors/Layout/elements/ui';
import {
  SET_SELECTORS_ELEMENTS_ATTRIBUTES,
  SET_SELECTORS_SERVICE_CLASSNAMES,
} from 'models/exersices/SetSelectors/config';

type Props = {
  className?: string;
};

const Sword: React.FC<Props> = ({ className }) => {
  return (
    <ElementSvgWrapper className={className}>
      <svg
        id={SET_SELECTORS_ELEMENTS_ATTRIBUTES.sword.id}
        className={cn(
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.sword.className,
          SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
          SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
        )}
        data-title={SET_SELECTORS_ELEMENTS_ATTRIBUTES.sword.title}
        data-service-tag={SET_SELECTORS_ELEMENTS_ATTRIBUTES.sword.tag}
        xmlns="http://www.w3.org/2000/svg"
        width="119.89"
        height="482.38"
        viewBox="0 0 119.89 482.38"
      >
        <g>
          <polyline
            points="59.95 0 36.57 49.6 46.06 364.28 73.83 364.28 83.33 49.6 59.95 0"
            fill="#95a1ab"
          />
          <polyline
            points="59.95 0 36.57 49.6 46.06 364.28 59.95 364.28 59.95 36.24 59.95 0"
            fill="#fff"
            opacity=".3"
          />
        </g>
        <g>
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m47.03,457.63c-.33-.93-.53-1.91-.53-2.93v-73.67c0-5.51,5.24-4.69,11.69-4.69h3.51c6.46,0,11.69-.81,11.69,4.69v73.67c0,.57-.07,1.13-.18,1.67-8.74.15-17.45.91-26.18,1.26Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m0,369.88c0,6.85,4.05,12.41,9.04,12.41h101.82c4.99,0,9.04-5.56,9.04-12.41h0c0-6.86-4.04-12.41-9.04-12.41H9.04c-4.99,0-9.04,5.56-9.04,12.41h0Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m32.8,351.98c0,3.14,1.83,5.69,4.08,5.69h45.93c2.25,0,4.08-2.55,4.08-5.69h0c0-3.14-1.82-5.69-4.08-5.69h-45.93c-2.25,0-4.08,2.55-4.08,5.69h0Z"
            fill="currentColor"
          />
          <path
            d="m41,463.43c0,10.47,8.49,18.95,18.95,18.95s18.94-8.48,18.94-18.95-8.48-18.94-18.94-18.94-18.95,8.48-18.95,18.94Z"
            fill="#eaa630"
          />
        </g>
      </svg>
    </ElementSvgWrapper>
  );
};

export default Sword;
