import cn from 'classnames';
import * as React from 'react';

import { ElementSvgWrapper } from 'models/exersices/SetSelectors/Layout/elements/ui';
import {
  SET_SELECTORS_ELEMENTS_ATTRIBUTES,
  SET_SELECTORS_SERVICE_CLASSNAMES,
} from 'models/exersices/SetSelectors/config';

type Props = {
  className?: string;
  isPowerSpell?: boolean;
};

const Spell: React.FC<Props> = ({ isPowerSpell, className }) => {
  const attributes = (() => {
    if (isPowerSpell) {
      return {
        id: SET_SELECTORS_ELEMENTS_ATTRIBUTES.powerSpell.id,
        className: cn(
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.powerSpell.className,
          SET_SELECTORS_ELEMENTS_ATTRIBUTES.powerSpell.classNameSpecific,
          SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
          SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
        ),
        ['data-title']: SET_SELECTORS_ELEMENTS_ATTRIBUTES.powerSpell.title,
        ['data-service-tag']: SET_SELECTORS_ELEMENTS_ATTRIBUTES.powerSpell.tag,
      };
    }

    return {
      className: cn(
        SET_SELECTORS_ELEMENTS_ATTRIBUTES.spell.className,
        SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized,
        SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized
      ),
      ['data-service-tag']: SET_SELECTORS_ELEMENTS_ATTRIBUTES.spell.tag,
    };
  })();

  return (
    <ElementSvgWrapper className={className}>
      <svg
        {...attributes}
        xmlns="http://www.w3.org/2000/svg"
        width="418.74"
        height="494"
        viewBox="0 0 418.74 494"
      >
        <g>
          <path
            d="m82.72,4.41S69.59,1.1,57.48.18C45.91-.71,3.93,5.9,2.04,36.9c-1.94,31.7,22.16,38.64,36.07,37.38,24.4-2.21,172.7.44,172.7.44L82.72,4.41Z"
            fill="#de9e6c"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized}
            d="m50.95,46.17c8,5.49,10.05,12.9,6.43,18.71-2.9,4.67-8.74,8.51-21.11,9.6.82.09,174.55.23,174.55.23l-52.01-28.55H50.95Z"
            fill="currentColor"
          />
          <path
            d="m101.63,61.97c.22,4.21.1,8.43-.32,12.64,49.62.06,109.51.11,109.51.11l-52.01-28.55h-60.67c.16.34.31.67.46.99"
            fill="#c17759"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.backgroundColorStylized}
            d="m386.5,34s-18.52-23.12-60-28c-17-2-198.11-.55-218.64-2.08-14.21-1.06-28.4-2.02-42.56-3.31-15.06-1.36-16.33.01-16.33.01,7.18.49,18.51,3.13,25.87,7.82C167.83,67.72,26.5,266,9.42,325.51c-9.52,33.17-16.14,80.88,2.18,124.56,18.33,43.67,77.2,43.45,77.2,43.45l281.96-7.86c-128.3-45.29-48.81-176.65-16.26-235.66,32-58,91.85-148,32-216Z"
            fill="currentColor"
          />
          <path
            d="m110.06,442.34s-5.98-1.42-11.61-.91c-5.63.52-16.78,7.01-14.26,15.2,0,0,2.47,9.1,15.1,8.42l41.28-2.7s-15.15-18.84-30.5-20.01Z"
            fill="#de9e6c"
            // eslint-disable-next-line react/no-unknown-property
            mix-blend-mode="multiply"
          />
          <path
            d="m399.19,442.15c-6.13-2.48-12.28-2.86-12.28-2.86l-26.19.16c-8.11.6-16.21,1.25-24.32,1.83-20.33,1.47-40.82,2.21-61.25,3.03-20.55.82-40.97,1.1-61.54.57-20.49-.53-40.99-1.15-61.44-2.07-10.05-.45-20.06-1.07-30.1-1.55-6.88-.33-13.84.02-20.74-.11l-2.89.29c28.6.51,37.53,26.69,26.62,39.9-10.91,13.21-44.51,11.59-44.51,11.59,44.51,4.31,295.77-5.86,309.42-5.93,16.27-.09,23.01-7.62,23.01-7.62,14.42-20.46-1.25-32.17-13.78-37.23Z"
            fill="#edc49c"
          />
        </g>
        <g>
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m126.5,123c-6.7-20.53,15.93-41.67,27-52,16.6-15.5,36.04-23.64,38-21,2.47,3.33-27.26,17.96-31,45-3.64,26.33,20.19,43.84,14,51-6.47,7.49-41.07-1.76-48-23Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m258.5,91c.94,6.35-63.22,27.24-70,15-3.86-6.98,11.83-23.05,22-31,27.1-21.18,62.05-21.52,63-18,1.19,4.4-49.79,18.49-48,27,1.37,6.53,32.36,2.65,33,7Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m222.5,144c1.32,24.4,18.18,41.12,32,41,15.44-.14,34.46-21.38,30-50l-30,24c-10.67-5-21.33-10-32-15Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m350.5,53c-12.34-7.53-52.3,17.89-55,50-1.63,19.4,10.44,40.03,17,39,7.59-1.19,8.77-31.51,9-45,4.67,16.67,9.33,33.33,14,50,24.87-69.52,22.51-89.42,15-94Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m134.3,169.83c4.99-4.04,55.65,40.52,48.57,52.59-4.04,6.88-25.86,1.56-37.88-3.14-32.03-12.52-50.13-42.43-47.59-45.04,3.18-3.26,41.28,33.42,47.69,27.55,4.92-4.51-14.21-29.19-10.79-31.96Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m299.73,237.88c-17.81,12.22-44.47-3.53-57.51-11.23-19.56-11.55-32.85-27.91-30.87-30.53,2.5-3.31,24.92,21.08,51.92,17.04,26.28-3.93,36.36-31.74,44.98-27.82,9.01,4.1,9.9,39.9-8.52,52.54Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m107.98,288.5c.94,6.35-63.22,27.24-70,15-3.86-6.98,11.83-23.05,22-31,27.1-21.18,62.05-21.52,63-18,1.19,4.4-49.79,18.49-48,27,1.37,6.53,32.36,2.65,33,7Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m142.59,314.22c6.4,12.97,53.75,12.87,73.22-12.81,11.76-15.51,12.61-39.4,6.51-42.04-7.05-3.06-24.27,21.93-31.68,33.2,4.98-16.58,9.95-33.15,14.93-49.73-58.22,45.42-66.87,63.49-62.97,71.38Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m293.18,316.64c2.01,21.5-24.72,37.13-37.79,44.78-19.61,11.47-40.37,15.12-41.69,12.12-1.67-3.79,30.54-11.52,40.15-37.07,9.35-24.88-10.04-47.21-2.42-52.83,7.96-5.88,39.68,10.76,41.76,33.01Z"
            fill="currentColor"
          />
          <path
            className={SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized}
            d="m102.86,404.29c19.75-14.38,24.61-37.63,16.99-49.16-8.52-12.88-36.68-17.28-58.27,2.03,12.15,4.04,24.31,8.08,36.46,12.12,1.61,11.67,3.22,23.34,4.82,35.01Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </ElementSvgWrapper>
  );
};

export default Spell;
