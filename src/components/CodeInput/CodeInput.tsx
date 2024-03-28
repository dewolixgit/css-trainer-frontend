import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeContainer, CodeContainerMain } from 'components/ui';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { IInputFlowOnlyCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowOnlyCode';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';

import { CodeInputRow, CodeTextarea } from './components';

type Props = {
  input: IInputFlowPartCode | IInputFlowOnlyCode;
};

const UnwrappedCodeInput: React.FC<Props> = ({ input }) => {
  if (input.inputType === InputFlowType.textArea) {
    return (
      <CodeContainer
        linesCount={input.linesCount}
        lineCounterTheme="secondary"
        mainTheme="secondary"
      >
        <CodeTextarea value={input.value} onChange={input.changeValue} rows={input.linesCount} />
      </CodeContainer>
    );
  }

  return (
    <CodeContainer linesCount={input.linesCount} lineCounterTheme="secondary" mainTheme="secondary">
      <CodeContainerMain>
        {input.rows.map((row) => (
          <CodeInputRow key={row.id} row={row} />
        ))}
      </CodeContainerMain>
    </CodeContainer>
  );
};

const CodeInput = observer(UnwrappedCodeInput);

export default CodeInput;
