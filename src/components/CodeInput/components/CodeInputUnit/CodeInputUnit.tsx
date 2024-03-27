import cn from 'classnames';
import * as React from 'react';

import './CodeInputUnit.module.scss';

type Props = {
  className?: string;
  value?: string;
  onChangeValue?: (v: string) => void;
  size?: number;
  stretch?: boolean;
  linesCount?: number;
};

const CodeInputUnit: React.FC<Props> = ({
  value,
  onChangeValue,
  className,
  size,
  stretch,
  linesCount = 1,
}) => {
  const handleOnChangeInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeValue?.(e.target.value);
    },
    [onChangeValue]
  );

  const handleOnChangeTextarea = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChangeValue?.(e.target.value);
    },
    [onChangeValue]
  );

  if (linesCount > 1) {
    return (
      <textarea
        styleName={cn('input', stretch && 'input_stretch', 'input_textarea')}
        className={className}
        value={value}
        onChange={handleOnChangeTextarea}
        rows={linesCount}
      />
    );
  }

  return (
    <input
      styleName={cn('input', stretch && 'input_stretch')}
      className={className}
      value={value}
      onChange={handleOnChangeInput}
      type="text"
      size={size}
    />
  );
};

export default React.memo(CodeInputUnit);
