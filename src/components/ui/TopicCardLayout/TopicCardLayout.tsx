import cn from 'classnames';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';

import { Button } from 'components/ui';
import { t } from 'config/translation';
import CheckSvg from 'img/svgComponents/check.c.svg';

import './TopicCardLayout.module.scss';

type Props = {
  className?: string;
  completed?: boolean;
  name: string;
  description: string;
  backgroundImage: string;
  linkPayload?: Pick<LinkProps, 'to' | 'state' | 'rel'>;
};

const TopicCardLayout: React.FC<Props> = ({
  completed,
  linkPayload,
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
          <Button styleName="button" routerLink={linkPayload} stretched>
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
        <Button styleName="button" routerLink={linkPayload} stretched>
          {t().components.topicCard.go}
        </Button>
      </div>
    </div>
  );
};

export default TopicCardLayout;
