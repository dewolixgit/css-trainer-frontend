import * as React from 'react';

import './CodeTextarea.module.scss';

type Props = {
  className?: string;
  value: string;
  onChange: (v: string) => void;
  rows: number;
};

const CodeTextarea: React.FC<Props> = ({ value, onChange, className, rows }) => {
  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <textarea
      styleName="root"
      className={className}
      value={value}
      onChange={handleOnChange}
      rows={rows}
    />
  );
};

export default React.memo(CodeTextarea);
