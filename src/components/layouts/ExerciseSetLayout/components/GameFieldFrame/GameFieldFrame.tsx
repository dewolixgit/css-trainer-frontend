import { observer } from 'mobx-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

import { useInnerExerciseSetStore } from 'components/layouts/ExerciseSetLayout/innerStoreContext';
import { ThematicLoader } from 'components/ui/loaders';
import { LoaderSizeEnum } from 'config/components/loaders';
import { TASKS } from 'exercises/config';

import { GameFieldFrameRoot, SavingLoader } from './components';
import { useScale } from './useScale';

import './GameFieldFrame.module.scss';

type Props = {
  /**
   * If the field is scaled from outer code, field should consider it
   */
  outerScaleFactor?: number;
};

const GameFieldFrame: React.FC<Props> = ({ outerScaleFactor = 1 }) => {
  const store = useInnerExerciseSetStore();

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  const [stylesTarget, setStylesTarget] = React.useState<HTMLLinkElement | null>(null);

  const iframeScale = useScale(rootRef, { outerScaleFactor });

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
              <StyleSheetManager target={stylesTarget ?? undefined}>
                <GameFieldFrameRoot>{layout}</GameFieldFrameRoot>
              </StyleSheetManager>,
              mountNode
            )}
        </iframe>
      )}
      {!isReady && (
        <div styleName="loader">
          <ThematicLoader size={LoaderSizeEnum.xxxxl} />
        </div>
      )}
      <SavingLoader styleName="saving-loader" />
    </div>
  );
};

export default observer(GameFieldFrame);
