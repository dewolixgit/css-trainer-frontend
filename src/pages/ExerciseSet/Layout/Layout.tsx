import * as React from 'react';

import './Layout.module.scss';
import { useScrollAnimation } from 'pages/ExerciseSet/Layout/useScrollAnimation';

import { TaskContent } from './components';

const Layout = () => {
  const { scrollFactor, scaleScrollFactor } = useScrollAnimation();

  return (
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
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
