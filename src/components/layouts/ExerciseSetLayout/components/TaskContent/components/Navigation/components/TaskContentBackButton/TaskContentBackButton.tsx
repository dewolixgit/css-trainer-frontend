import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { useInnerExerciseSetNavigationContext } from 'components/layouts/ExerciseSetLayout/innerNavigationContext';
import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';

import './TaskContentBackButton.module.scss';

type Props = {
  className?: string;
};

const TaskContentBackButton: React.FC<Props> = ({ className }) => {
  const navigationContext = useInnerExerciseSetNavigationContext();

  return (
    <Link
      styleName={cn('root', !navigationContext.exitLink && 'root_disabled')}
      className={className}
      aria-disabled={!navigationContext.exitLink}
      tabIndex={navigationContext.exitLink ? undefined : -1}
      to={navigationContext.exitLink ?? ''}
    >
      <ArrowLeftSvg styleName="arrow" />
    </Link>
  );
};

export default observer(TaskContentBackButton);
