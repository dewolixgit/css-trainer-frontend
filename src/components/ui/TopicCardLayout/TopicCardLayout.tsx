import cn from 'classnames';
import { sanitize } from 'dompurify';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';

import { Button } from 'components/ui';
import { t } from 'config/translation';
import CheckSvg from 'img/svgComponents/check.c.svg';

import { TopicCardSkeleton } from './TopicCardSkeleton';

import './TopicCardLayout.module.scss';

interface ITopicCardComposition {
  Skeleton: typeof TopicCardSkeleton;
}

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
  // Todo: Sanitize on api data transformation
  const sanitizedName = React.useMemo(() => sanitize(name), [name]);
  const sanitizedDescription = React.useMemo(() => sanitize(description), [description]);

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
          <h3 styleName="title" dangerouslySetInnerHTML={{ __html: sanitizedName }} />
        </div>
        <div styleName="hover">
          <div styleName="description" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          <Button styleName="button" routerLink={linkPayload} stretched>
            {t().components.topicCard.go}
          </Button>
        </div>
      </div>
      <div styleName="mobile-view">
        {completed && <CheckSvg styleName="check" />}
        <h3 styleName="title" dangerouslySetInnerHTML={{ __html: sanitizedName }} />
        <div styleName="description">
          <div
            styleName="description__inner"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        </div>
        <Button styleName="button" routerLink={linkPayload} stretched>
          {t().components.topicCard.go}
        </Button>
      </div>
    </div>
  );
};

const Memoized = React.memo(TopicCardLayout);

// @ts-ignore
Memoized.Skeleton = TopicCardSkeleton;

// @ts-ignore
export default Memoized as typeof TopicCardLayout & ITopicCardComposition;
