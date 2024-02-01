import { Breakpoints } from '../config';

import { useViewportNarrowerThan } from './useViewportNarrowerThan';

export const useIsTouchWidth = () => useViewportNarrowerThan(Breakpoints.maxWidthTabletM);
