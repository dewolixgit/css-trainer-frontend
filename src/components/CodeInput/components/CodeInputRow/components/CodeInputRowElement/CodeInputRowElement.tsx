import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeInputUnit } from 'components/CodeInput/components/CodeInputUnit';
import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IPartCodeMixedRowTextElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';

type Props = {
  element: IPartCodeMixedRowCodeElement | IPartCodeMixedRowTextElement;
};

const UnwrappedCodeInputRowElement: React.FC<Props> = ({ element }) => {
  if (element.type === PartCodeMixedRowElementType.text) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{element.text}</>;
  }

  return (
    <CodeInputUnit
      value={element.value}
      onChangeValue={element.changeValue}
      size={element.symbolsLength}
    />
  );
};

const CodeInputRowElement = observer(UnwrappedCodeInputRowElement);

export default CodeInputRowElement;
