import * as React from 'react';

import './ExerciseSetLayout.module.scss';
import './ExerciseSetLayout.scss';

import { InnerExerciseSetNavigationProvider } from 'components/layouts/ExerciseSetLayout/innerNavigationContext';
import { InnerExerciseSetStoreProvider } from 'components/layouts/ExerciseSetLayout/innerStoreContext';
import { ExerciseSetNavigationContextType } from 'config/components/layouts/exerciseSetLayout';
import { IExerciseSetPageStore } from 'config/store/exerciseSetPageStore';

import { GameFieldFrame, TaskContent } from './components';
import { useScrollAnimation } from './useScrollAnimation';

type Props = {
  navigationContextData: ExerciseSetNavigationContextType;
  store: IExerciseSetPageStore;
};

const ExerciseSetLayout: React.FC<Props> = ({ navigationContextData, store }) => {
  const { scrollFactor, scaleScrollFactor } = useScrollAnimation();

  return (
    <InnerExerciseSetNavigationProvider value={navigationContextData}>
      <InnerExerciseSetStoreProvider store={store}>
        <div styleName="root">
          <div
            styleName="content"
            style={
              {
                ['--scroll-factor']: scrollFactor,
              } as React.CSSProperties
            }
          >
            <div styleName="content__inner">
              <TaskContent />
            </div>
          </div>
          <div styleName="game-field">
            <div styleName="game-field__container">
              <div
                styleName="game-field__inner"
                style={
                  {
                    ['--scroll-factor']: scrollFactor,
                    ['--scale-scroll-factor']: scaleScrollFactor,
                  } as React.CSSProperties
                }
              >
                <GameFieldFrame outerScaleFactor={scaleScrollFactor} />
              </div>
            </div>
          </div>
        </div>
      </InnerExerciseSetStoreProvider>
    </InnerExerciseSetNavigationProvider>
  );
};

export default ExerciseSetLayout;
