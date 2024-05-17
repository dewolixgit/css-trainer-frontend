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

const Helmet: React.FC<Props> = ({ className }) => {
  return (
    <ElementSvgWrapper className={className}>
      <svg
        id={SET_SELECTORS_ELEMENTS_ATTRIBUTES.helmet.id}
        className={cn(
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.helmet.className,
          SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
          SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
        )}
        data-title={SET_SELECTORS_ELEMENTS_ATTRIBUTES.helmet.title}
        data-service-tag={SET_SELECTORS_ELEMENTS_ATTRIBUTES.helmet.tag}
        xmlns="http://www.w3.org/2000/svg"
        width="401"
        height="462.84"
        viewBox="0 0 401 462.84"
      >
        <ellipse cx="197.39" cy="392.97" rx="188.91" ry="55.03" fill="#141109" />
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized}
          d="m333.96,321.76H5.71v112.07c0,14.02,13.51,25.38,30.18,25.38,1.17,0,2.32-.07,3.46-.18l26.86-68.03c8.77-21.37,22.66-37.33,45.27-37.33h5.4c24.14,0,43.84,18.57,45.31,41.99h75.49c1.38-23.52,21.11-42.18,45.32-42.18h5.4c22.69,0,35.37,14.93,44.85,37.81l27.23,67.85c1.2.12,2.42.21,3.67.21,16.67,0,30.18-11.36,30.18-25.38v-112.21h-60.35Z"
          fill="currentColor"
        />
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized}
          d="m5.91,261.29c0-124.52,86.9-225.46,194.1-225.46s194.1,100.94,194.1,225.46"
          fill="currentColor"
        />
        <path
          d="m240.7,41.02c0-22.66-18.22-41.02-40.69-41.02s-40.69,18.37-40.69,41.02l.12,386.94s29.32,34.88,40.26,34.88c10.93,0,40.19-34.88,40.19-34.88l.8-386.94Z"
          fill="#43403a"
        />
        <rect x="5.72" y="260.92" width="388.58" height="61.59" fill="#37342e" />
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
          d="m85,181S0,176,0,125V36.19s21.97,70.93,63,81.81c49,13,40,65,22,63Z"
          fill="currentColor"
        />
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
          d="m316,181s85-5,85-56,0-88.81,0-88.81c0,0-21.97,70.93-63,81.81-49,13-40,65-22,63Z"
          fill="currentColor"
        />
      </svg>
    </ElementSvgWrapper>
  );
};

export default Helmet;
