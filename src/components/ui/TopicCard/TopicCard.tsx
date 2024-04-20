import cn from 'classnames';
import * as React from 'react';

import { Button } from 'components/ui';
import { t } from 'config/translation';
import CheckSvg from 'img/svgComponents/check.c.svg';

import './TopicCard.module.scss';

type Props = {
  className?: string;
  completed?: boolean;
  name: string;
  description: string;
  backgroundImage: string;
  link: string;
};

const TopicCard: React.FC<Props> = ({
  completed,
  link,
  description,
  name,
  className,
  backgroundImage,
}) => {
  return (
    <div
      styleName={cn('card', className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div styleName="desktop-view">
        <div styleName="static">
          {completed && <CheckSvg styleName="check" />}
          <h3 styleName="title">{name}</h3>
        </div>
        <div styleName="hover">
          <div styleName="description">{description}</div>
          <Button styleName="button" href={link} stretched>
            {t().components.topicCard.go}
          </Button>
        </div>
      </div>
      <div styleName="mobile-view">
        {completed && <CheckSvg styleName="check" />}
        <h3 styleName="title">{name}</h3>
        <div styleName="description">
          <div styleName="description__inner">{description}</div>
        </div>
        <Button styleName="button" href={link} stretched>
          {t().components.topicCard.go}
        </Button>
      </div>
    </div>
  );
};

export default TopicCard;
