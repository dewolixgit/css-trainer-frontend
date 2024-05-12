import { sanitize } from 'dompurify';
import { observer } from 'mobx-react';
import * as React from 'react';

import { IInfoFlowListBlock } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowListBlock';

import './ListBlock.module.scss';

type Props = {
  className?: string;
  flowBlock: IInfoFlowListBlock;
};

const ListBlock: React.FC<Props> = ({ flowBlock, className }) => {
  const sanitizedTitle = React.useMemo(() => sanitize(flowBlock.title), [flowBlock.title]);
  const sanitizedItems = React.useMemo(
    () => flowBlock.items.map((item) => sanitize(item.text)),
    [flowBlock.items]
  );

  return (
    <div className={className}>
      {Boolean(sanitizedTitle) && (
        <h3 styleName="title" dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
      )}
      <ul styleName="list">
        {flowBlock.items.map((item, index) => (
          <li key={item.id} dangerouslySetInnerHTML={{ __html: sanitizedItems[index] }} />
        ))}
      </ul>
    </div>
  );
};

export default observer(ListBlock);
