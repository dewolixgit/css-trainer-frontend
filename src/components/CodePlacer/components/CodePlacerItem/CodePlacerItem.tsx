import cn from 'classnames';
import { Reorder, useMotionValue } from 'framer-motion';
import * as React from 'react';

import { CodeBlock } from 'components/CodeBlock';
import { IInputFlowDndOption } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd/inputFlowDndOption';

import './CodePlacerItem.module.scss';

type Props = {
  className?: string;
  option: IInputFlowDndOption;
};

const CodePlacerItem: React.FC<Props> = ({ option, className }) => {
  const [dragging, setDragging] = React.useState(false);

  const yMotion = useMotionValue(0);

  React.useEffect(() => {
    const disposer = yMotion.on('change', (latestY) => {
      if (latestY !== 0) {
        return setDragging(true);
      }

      return setDragging(false);
    });

    return () => {
      disposer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Reorder.Item
      styleName={cn('item', dragging && 'item_dragging')}
      key={option.id}
      value={option.id}
      style={{
        y: yMotion,
      }}
      className={className}
      whileDrag={{
        cursor: 'grabbing',
      }}
    >
      <CodeBlock code={option.code} />
    </Reorder.Item>
  );
};

export default CodePlacerItem;
