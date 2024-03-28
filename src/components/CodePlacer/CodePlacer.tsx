import { Reorder } from 'framer-motion';
import { observer } from 'mobx-react';
import * as React from 'react';

import { IInputFlowDnd } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd';

import { CodePlacerItem } from './components';

import './CodePlacer.module.scss';

type Props = {
  className?: string;
  input: IInputFlowDnd;
};

const UnwrappedCodePlacer: React.FC<Props> = ({ input, className }) => {
  const ids = React.useMemo(() => input.options.map((o) => o.id), [input.options]);

  return (
    <Reorder.Group
      axis="y"
      as="ul"
      values={ids}
      onReorder={input.setOrder}
      styleName="list"
      className={className}
    >
      {input.options.map((option) => (
        <CodePlacerItem key={option.id} option={option} />
      ))}
    </Reorder.Group>
  );
};

const CodePlacer = observer(UnwrappedCodePlacer);

export default CodePlacer;
