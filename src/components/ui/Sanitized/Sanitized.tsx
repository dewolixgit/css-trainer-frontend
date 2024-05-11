import { sanitize } from 'dompurify';
import * as React from 'react';

type Props = {
  children: string;
  tag?: 'span' | 'div';
};

const Sanitized: React.FC<Props> = ({ children, tag: Tag = 'span' }) => {
  const sanitized = React.useMemo(() => sanitize(children), [children]);

  return <Tag dangerouslySetInnerHTML={{ __html: sanitized }} />;
};

export default React.memo(Sanitized);
