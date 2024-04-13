import * as Toast from '@radix-ui/react-toast';
import * as React from 'react';

import {
  BASE_TOAST_DEFAULT_DURATION,
  getBaseToastDefaultLabel,
} from 'config/components/baseToast/config';
import { Breakpoints, useViewportNarrowerThan } from 'config/viewport';

type Props = Toast.ToastProviderProps;

const BaseToastProvider: React.FC<Props> = ({
  duration = BASE_TOAST_DEFAULT_DURATION,
  label,
  swipeDirection,
  ...props
}) => {
  const isMobile = useViewportNarrowerThan(Breakpoints.maxWidthPhoneL);

  const computedSwipeDirection = React.useMemo(() => {
    if (swipeDirection) {
      return swipeDirection;
    }

    if (isMobile) {
      return 'down';
    }

    return 'right';
  }, [isMobile, swipeDirection]);

  const computedLabel = React.useMemo(() => {
    if (label) {
      return label;
    }

    return getBaseToastDefaultLabel();
  }, [label]);

  return (
    <Toast.Provider
      duration={duration}
      swipeDirection={computedSwipeDirection}
      label={computedLabel}
      {...props}
    />
  );
};

export default React.memo(BaseToastProvider);
