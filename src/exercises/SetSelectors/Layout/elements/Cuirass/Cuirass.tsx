import cn from 'classnames';
import * as React from 'react';

import { ElementSvgWrapper } from 'exercises/SetSelectors/Layout/elements/ui';
import {
  SET_SELECTORS_ELEMENTS_ATTRIBUTES,
  SET_SELECTORS_SERVICE_CLASSNAMES,
} from 'exercises/SetSelectors/config';

type Props = {
  className?: string;
};

const Cuirass: React.FC<Props> = ({ className }) => {
  return (
    <ElementSvgWrapper className={className}>
      <svg
        id={SET_SELECTORS_ELEMENTS_ATTRIBUTES.cuirass.id}
        className={cn(
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.cuirass.className,
          SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
          SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
        )}
        data-title={SET_SELECTORS_ELEMENTS_ATTRIBUTES.cuirass.title}
        data-service-tag={SET_SELECTORS_ELEMENTS_ATTRIBUTES.cuirass.tag}
        xmlns="http://www.w3.org/2000/svg"
        width="401.08"
        height="454.71"
        viewBox="0 0 401.08 454.71"
      >
        <g>
          <g>
            <path
              className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
              d="m73.56,326.09L0,386.88l149.2,67.83s5.83-33.44,51.34-33.44v-49.18l-126.98-46Z"
              fill="currentColor"
            />
            <path
              className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
              d="m327.52,326.09l73.56,60.79-149.19,64.34s-15.55-29.95-51.34-29.95v-49.18l126.98-46Z"
              fill="currentColor"
            />
            <path
              d="m327.52,326.09l73.56,60.79-149.19,64.34s-15.55-29.95-51.34-29.95v-49.18l126.98-46Z"
              opacity=".1"
            />
          </g>
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m200.54,42.87s-50.31-7.66-69.48-42.87L55.08,37.72s21.16,82.85-36,108l54.48,180.37s56.54,42.17,126.98,46V42.87Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m200.54,42.87s50.31-7.66,69.49-42.87l76.05,39.72s-22.16,88.85,35,114l-53.55,172.37s-56.55,42.17-126.99,46V42.87Z"
            fill="currentColor"
          />
          <path
            d="m200.54,42.87s50.31-7.66,69.49-42.87l76.05,39.72s-22.16,88.85,35,114l-53.55,172.37s-56.55,42.17-126.99,46V42.87Z"
            opacity=".1"
          />
        </g>
        <path
          d="m73.56,326.09s65.44,46,126.98,46,126.99-46,126.99-46l2.23-7.16s-65.52,43.56-128.1,43.56-130.26-43.56-130.26-43.56l2.16,7.16Z"
          fill="#aac4d6"
        />
      </svg>
    </ElementSvgWrapper>
  );
};

export default Cuirass;
