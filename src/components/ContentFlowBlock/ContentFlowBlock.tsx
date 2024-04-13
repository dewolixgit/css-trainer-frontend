import * as React from 'react';

import { CodeInput } from 'components/CodeInput';
import { CodePlacer } from 'components/CodePlacer';
import { ImageBlock } from 'components/infoFlowBlock/ImageBlock';
import { TextBlock } from 'components/infoFlowBlock/TextBlock';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType, FlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';

type Props = {
  className?: string;
  targetClassName?: (item: FlowBlockInterfaceUnion) => string;
  content: FlowBlockInterfaceUnion;
};

const ContentFlowBlock: React.FC<Props> = ({ content, className, targetClassName }) => {
  const computedClassName = React.useMemo(
    () => className ?? targetClassName?.(content),
    [className, targetClassName, content]
  );

  if (content.contentType === ContentFlowBlockType.info) {
    switch (content.infoType) {
      case InfoFlowBlockType.image:
        return <ImageBlock flowBlock={content} className={computedClassName} />;
      case InfoFlowBlockType.text:
        return <TextBlock flowBlock={content} className={computedClassName} />;
      default:
        return null;
    }
  }

  if (content.contentType === ContentFlowBlockType.input) {
    switch (content.inputType) {
      case InputFlowType.textArea:
      case InputFlowType.partText:
        return <CodeInput input={content} className={computedClassName} />;
      case InputFlowType.dragAndDrop:
        return <CodePlacer input={content} className={computedClassName} />;
      default:
        return null;
    }
  }

  return null;
};

export default ContentFlowBlock;
