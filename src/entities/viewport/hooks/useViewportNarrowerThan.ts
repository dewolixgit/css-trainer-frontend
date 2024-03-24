import * as React from 'react';

import { isViewportNarrowerThan } from '../utils';

export const useViewportNarrowerThan = (breakpoint: number) => {
  const [isViewportNarrower, setIsViewportNarrower] = React.useState(() =>
    isViewportNarrowerThan(breakpoint)
  );

  React.useEffect(() => {
    const onResize = () => setIsViewportNarrower(isViewportNarrowerThan(breakpoint));

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [breakpoint]);

  return isViewportNarrower;
};
