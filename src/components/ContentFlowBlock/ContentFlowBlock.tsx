import cn from 'classnames';
import * as React from 'react';

import { CodeInput } from 'components/CodeInput';
import { CodePlacer } from 'components/CodePlacer';
import { CodeFlowBlock } from 'components/infoFlowBlock/CodeFlowBlock';
import { ImageBlock } from 'components/infoFlowBlock/ImageBlock';
import { TextBlock } from 'components/infoFlowBlock/TextBlock';
import { CONTENT_FLOW_BLOCK_CLASSES } from 'config/contentFlowBlock/styles';
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
        return (
          <ImageBlock
            flowBlock={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.infoFlowImageBlock)}
          />
        );
      case InfoFlowBlockType.text:
        return (
          <TextBlock
            flowBlock={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.infoFlowTextBlock)}
          />
        );
      case InfoFlowBlockType.code:
        return (
          <CodeFlowBlock
            flowBlock={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.infoFlowCodeBlock)}
          />
        );
      default:
        return null;
    }
  }

  if (content.contentType === ContentFlowBlockType.input) {
    switch (content.inputType) {
      case InputFlowType.textArea:
        return (
          <CodeInput
            input={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.inputFlowOnlyCode)}
          />
        );
      case InputFlowType.partText:
        return (
          <CodeInput
            input={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.inputFlowPartCode)}
          />
        );
      case InputFlowType.dragAndDrop:
        return (
          <CodePlacer
            input={content}
            className={cn(computedClassName, CONTENT_FLOW_BLOCK_CLASSES.inputFlowDnd)}
          />
        );
      default:
        return null;
    }
  }

  return null;
};

export default ContentFlowBlock;
