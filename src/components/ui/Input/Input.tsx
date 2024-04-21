import cn from 'classnames';
import * as React from 'react';

import './Input.module.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  stretched?: boolean;
  label?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  className,
  stretched,
  value: controlledValue,
  onChangeValue: controlledOnChangeValue,
  onChange: controlledOnChange,
  label,
  type = 'input',
  ...props
}) => {
  const [uncontrolledValue, uncontrolledOnChangeValue] = React.useState(controlledValue ?? '');

  const value = controlledValue ?? uncontrolledValue;
  const onChangeValue = controlledOnChangeValue ?? uncontrolledOnChangeValue;

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      controlledOnChange?.(e);
      onChangeValue(e.target.value);
    },
    [controlledOnChange, onChangeValue]
  );

  return (
    <label styleName={cn('label', stretched && 'label__stretched')} className={className}>
      {label}
      <input styleName="input" type={type} value={value} onChange={handleChange} {...props} />
    </label>
  );
};

export default React.memo(Input);
