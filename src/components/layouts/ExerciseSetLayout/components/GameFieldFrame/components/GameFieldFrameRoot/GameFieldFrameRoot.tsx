import * as React from 'react';

import * as s from './GameFieldFrameRoot.styles';

type Props = {
  children?: React.ReactNode;
};

const GameFieldFrameRoot: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <s.GlobalStyle />
    </>
  );
};

export default GameFieldFrameRoot;
