import * as React from 'react';

/**
 * Split a text into lines by a divider
 */
export default (
  text: string,
  divider: string | RegExp = '\n'
): { markup: React.ReactNode; linesCount: number } => {
  if (text.length === 0) {
    return {
      linesCount: 0,
      markup: null,
    };
  }

  const lines = text.split(divider);

  const lastIndex = lines.length - 1;

  return {
    linesCount: lines.length,
    markup: (
      <>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== lastIndex && <br />}
          </React.Fragment>
        ))}
      </>
    ),
  };
};
