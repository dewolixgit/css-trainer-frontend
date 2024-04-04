import { useScrollCounter } from 'utils/hooks/scroll/useScrollCounter';

// Scroll distance should be ignored
const SCROLL_OFFSET = 32;

export const useScrollAnimation = () => {
  const scroll = useScrollCounter();

  // How much scrolled relative to the 600px
  const scrollFactor = Math.max(scroll - SCROLL_OFFSET, 0) / 600;

  return {
    scrollFactor,

    // How much to scale the game field. Higher scrollFactor leads to less scale, but not less 0.68.
    // Dividing by 2.2 to make the scale factor more smooth
    scaleScrollFactor: Math.max(1 - scrollFactor / 2.2, 0.68),
  };
};
