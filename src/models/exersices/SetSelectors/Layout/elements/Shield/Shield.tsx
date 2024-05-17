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

const Shield: React.FC<Props> = ({ className }) => {
  return (
    <ElementSvgWrapper className={className}>
      <svg
        id={SET_SELECTORS_ELEMENTS_ATTRIBUTES.shield.id}
        className={cn(
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.shield.className,
          SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
          SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
        )}
        data-title={SET_SELECTORS_ELEMENTS_ATTRIBUTES.shield.title}
        data-service-tag={SET_SELECTORS_ELEMENTS_ATTRIBUTES.shield.tag}
        xmlns="http://www.w3.org/2000/svg"
        width="417.67"
        height="489.55"
        viewBox="0 0 417.67 489.55"
      >
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.borderColorStylized}
          d="m214.83,6.37c-2.06-2.09-4.04-4.22-6-6.37-1.96,2.15-3.93,4.28-6,6.37C147.89,61.84,69.96,79.88,0,60.61v218.1c0,116.45,93.5,210.85,208.84,210.85s208.83-94.4,208.83-210.85V60.61c-69.96,19.28-147.89,1.24-202.84-54.24Z"
          fill="currentColor"
        />
        <path
          d="m214.37,30.14c-1.9-1.91-3.73-3.86-5.54-5.83-1.81,1.96-3.63,3.92-5.53,5.82-50.71,50.71-122.63,67.2-187.19,49.58v199.35c0,106.44,86.29,192.73,192.73,192.73s192.72-86.29,192.72-192.73V79.71c-64.56,17.62-136.48,1.13-187.19-49.57Z"
          fill="#949494"
        />
        <path
          d="m213.99,56.74c-1.77-1.69-3.47-3.42-5.15-5.16-1.68,1.73-3.38,3.47-5.15,5.15-47.2,44.89-114.14,59.49-174.23,43.89v187.79c0,94.23,80.31,170.62,179.39,170.62s179.38-76.39,179.38-170.62V100.63c-60.09,15.6-127.03,1-174.23-43.89Z"
          fill="#696969"
        />
        <path
          className={SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized}
          d="m213.63,71.06c-1.65-1.65-3.23-3.34-4.8-5.04-1.57,1.7-3.14,3.39-4.79,5.03-43.93,43.82-106.23,58.07-162.16,42.85v160.43c0,91.99,74.75,166.56,166.95,166.56s166.95-74.57,166.95-166.56V113.9c-55.92,15.23-118.23.98-162.15-42.84Z"
          fill="currentColor"
        />
        <g>
          <path
            d="m135.16,112.44c-4.32,1.32-8.67,2.48-13.07,3.45v300.78c4.23,2.57,8.6,4.94,13.07,7.14V112.44Z"
            fill="#654a42"
          />
          <path
            d="m175.26,94.04c-4.27,2.7-8.62,5.19-13.07,7.46v332.76c4.29,1.24,8.64,2.36,13.07,3.27V94.04Z"
            fill="#654a42"
          />
          <path
            d="m95.05,119.55c-4.35.23-8.71.28-13.07.18v262.83c4.1,4.78,8.46,9.33,13.07,13.61V119.55Z"
            fill="#654a42"
          />
          <path
            d="m215.36,72.73c-.58-.56-1.16-1.1-1.73-1.67-1.65-1.65-3.23-3.34-4.8-5.04-1.57,1.7-3.14,3.39-4.79,5.03-.58.57-1.17,1.12-1.75,1.69v367.99c2.17.09,4.35.17,6.54.17s4.36-.08,6.53-.17V72.73Z"
            fill="#654a42"
          />
          <path
            d="m54.95,116.88c-4.39-.82-8.75-1.8-13.07-2.98v160.43c0,22.95,4.65,44.81,13.07,64.7V116.88Z"
            fill="#654a42"
          />
          <path
            d="m335.67,119.73c-4.36.11-8.72.06-13.07-.18v276.63c4.61-4.29,8.97-8.83,13.07-13.61V119.73Z"
            fill="#654a42"
          />
          <path
            d="m255.46,101.5c-4.44-2.27-8.8-4.77-13.07-7.47v343.49c4.43-.9,8.77-2.02,13.07-3.27V101.5Z"
            fill="#654a42"
          />
          <path
            d="m375.77,113.9c-4.32,1.18-8.69,2.15-13.07,2.98v222.18c8.37-19.78,13.01-41.51,13.07-64.32V113.9Z"
            fill="#654a42"
          />
          <path
            d="m295.57,115.89c-4.39-.96-8.75-2.13-13.07-3.45v311.37c4.46-2.2,8.84-4.57,13.07-7.14V115.89Z"
            fill="#654a42"
          />
        </g>
        <path
          d="m213.63,71.06c-1.65-1.65-3.23-3.34-4.8-5.04-1.57,1.7-3.14,3.39-4.79,5.03-43.93,43.82-106.23,58.07-162.16,42.85v160.43c0,91.99,74.75,166.56,166.95,166.56s166.95-74.57,166.95-166.56V113.9c-55.92,15.23-118.23.98-162.15-42.84Zm152.25,201.37c0,83.6-70.31,151.36-157.04,151.36S51.78,356.03,51.78,272.43V126.63c52.61,13.84,111.22.89,152.54-38.94,1.55-1.5,3.04-3.03,4.51-4.57,1.48,1.54,2.96,3.08,4.51,4.58,41.32,39.82,99.93,52.77,152.53,38.93v145.8Z"
          fill="#654a42"
        />
        <g>
          <polygon
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            points="101.45 167.76 107.7 154.37 108.6 168.21 128.38 166.7 111.28 178.48 114.4 195 103.24 180.27 88.06 191.87 95.65 175.35 85.38 162.41 101.45 167.76"
            fill="currentColor"
          />
          <polygon
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            points="132.24 319.63 144.81 327.4 130.96 326.67 130.14 346.49 120.44 328.13 103.67 329.3 119.61 319.94 109.86 303.5 125.38 312.97 139.44 304.29 132.24 319.63"
            fill="currentColor"
          />
          <polygon
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            points="212 250.04 206.46 263.75 204.84 249.97 185.16 252.52 201.63 239.85 197.64 223.52 209.56 237.65 224.11 225.26 217.4 242.16 228.33 254.55 212 250.04"
            fill="currentColor"
          />
          <polygon
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            points="276.9 341.65 290.57 336.01 281.86 346.81 297.45 359.08 276.89 356.18 268.01 370.46 269.76 352.06 250.73 350.34 267.49 343.31 268.69 326.83 276.9 341.65"
            fill="currentColor"
          />
          <polygon
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            points="298.75 178.06 286.11 170.39 299.97 171 300.61 151.17 310.47 169.46 327.23 168.14 311.37 177.64 321.26 193.99 305.66 184.65 291.68 193.46 298.75 178.06"
            fill="currentColor"
          />
        </g>
      </svg>
    </ElementSvgWrapper>
  );
};

export default Shield;
