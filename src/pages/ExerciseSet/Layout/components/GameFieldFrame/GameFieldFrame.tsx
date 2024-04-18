import { observer } from 'mobx-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

import { ThematicLoader } from 'components/ui/loaders';
import { LoaderSizeEnum } from 'config/components/loaders';
import { TASKS } from 'models/exersices/config';
import { useScale } from 'pages/ExerciseSet/Layout/components/GameFieldFrame/useScale';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import './GameFieldFrame.module.scss';

const GameFieldFrame: React.FC = () => {
  const store = useExerciseSetPageStore();

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  const [stylesTarget, setStylesTarget] = React.useState<HTMLLinkElement | null>(null);

  const iframeScale = useScale(rootRef);

  React.useEffect(() => {
    (() => {
      if (!iframeRef.current) {
        return;
      }

      const stylesLink = iframeRef.current?.contentWindow?.document.createElement('link');

      if (stylesLink) {
        iframeRef.current?.contentWindow?.document.head.append(stylesLink);
        setStylesTarget(stylesLink);
      }

      store.taskProgress.value?.stylist.init(iframeRef.current);
    })();
  }, [store.taskProgress.value?.stylist]);

  const isReady = Boolean(store.taskProgress.value) && store.meta.isLoaded;
  const mountNode = iframeRef.current?.contentWindow?.document.body;

  const layout = store.currentTaskInSet?.data.id
    ? TASKS[store.currentTaskInSet.data.id as number]?.layout ?? null
    : null;

  return (
    <div styleName="root" ref={rootRef}>
      {isReady && (
        <iframe
          ref={iframeRef}
          styleName="iframe"
          style={{
            transform: `scale(${iframeScale})`,
          }}
        >
          {mountNode &&
            createPortal(
              <StyleSheetManager target={stylesTarget ?? undefined}>{layout}</StyleSheetManager>,
              mountNode
            )}
        </iframe>
      )}
      {!isReady && (
        <div styleName="loader">
          <ThematicLoader size={LoaderSizeEnum.xxxxl} />
        </div>
      )}
    </div>
  );
};

export default observer(GameFieldFrame);
