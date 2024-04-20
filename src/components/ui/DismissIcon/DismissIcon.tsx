import cn from 'classnames';
import * as React from 'react';

import { DismissButtonColor } from 'config/components/dismiss/types';

import './DismissIcon.module.scss';

type Props = React.SVGProps<SVGSVGElement> & {
  color?: DismissButtonColor;
};

const DismissIcon: React.FC<Props> = ({
  color = DismissButtonColor.primary,
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}) => {
  return (
    <svg
      styleName={cn(`root_color-${color}`)}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle styleName="circle" cx="12" cy="12" r="12" fill="currentColor" />
      <path
        styleName="cross"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.69743 6.19019C6.26406 6.45786 6.04101 6.92133 6.12437 7.3807C6.17942 7.68375 6.53327 8.09275 8.27682 9.86847L10.3635 11.9935L8.21694 14.17C6.40681 16.0054 6.06153 16.4022 6.01349 16.7022C5.87173 17.5871 6.87598 18.2932 7.68561 17.8778C7.80408 17.8169 8.82176 16.8396 9.94696 15.7059L11.9929 13.6445L14.0903 15.7592C15.4467 17.127 16.2854 17.8986 16.4643 17.9433C17.3734 18.1712 18.1742 17.463 17.967 16.614C17.9244 16.4393 17.1216 15.5468 15.7633 14.1641L13.6266 11.9892L15.7316 9.85467C17.7517 7.80639 17.8387 7.70204 17.8866 7.27096C17.923 6.94422 17.8892 6.74842 17.7627 6.55281C17.445 6.06156 16.7844 5.85856 16.3045 6.10484C16.186 6.16571 15.1678 7.14352 14.042 8.27786L11.995 10.3403L9.94805 8.27786C8.82215 7.14352 7.80408 6.16571 7.68561 6.10484C7.36943 5.94262 7.05395 5.9699 6.69743 6.19019Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DismissIcon;
