import * as React from 'react';

const IFRAME_SIZE = 1000;

export const useScale = (
  rootRef: React.MutableRefObject<HTMLDivElement | null>,
  { outerScaleFactor = 1 }: { outerScaleFactor?: number } = {}
) => {
  const [iframeScale, setIframeScale] = React.useState(1);

  React.useEffect(() => {
    const updateIframeScale = () => {
      if (!rootRef.current) {
        return;
      }

      const rootRect = rootRef.current.getBoundingClientRect();

      const scale = rootRect.width / outerScaleFactor / IFRAME_SIZE;

      setIframeScale(scale);
    };

    window.addEventListener('resize', updateIframeScale);

    updateIframeScale();

    return () => {
      window.removeEventListener('resize', updateIframeScale);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerScaleFactor]);

  return iframeScale;
};
