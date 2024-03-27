import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeInputUnit } from 'components/CodeInput/components/CodeInputUnit';
import { Flex } from 'components/ui';
import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { range } from 'utils/array';

import { CodeInputRowElement } from './components';

type Props = {
  row: IPartCodeOnlyRow | IPartCodeMixedRow;
};

const UnwrappedCodeInputRow: React.FC<Props> = ({ row }) => {
  const tabs = React.useMemo(
    () => (
      <Flex flexGrow={0} flexShrink={1}>
        {range(row.tabs).map((i) => (
          <React.Fragment key={i}>&nbsp;&nbsp;</React.Fragment>
        ))}
      </Flex>
    ),
    [row.tabs]
  );

  if (row.type === PartCodeRowType.code) {
    return (
      <Flex>
        {tabs}
        <Flex flexGrow={1}>
          <CodeInputUnit
            value={row.value}
            onChangeValue={row.changeValue}
            linesCount={row.linesCount}
            stretch
          />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex>
      {tabs}
      <Flex flexGrow={1}>
        {row.elements.map((element) => (
          <CodeInputRowElement key={element.id} element={element} />
        ))}
      </Flex>
    </Flex>
  );
};

const CodeInputRow = observer(UnwrappedCodeInputRow);

export default CodeInputRow;
