import { observer } from 'mobx-react';
import * as React from 'react';
import './Grid.module.scss';

type Props<T> = {
  className?: string;
  cols?: number;
  rows?: number;
  items?: T[];
  renderItem?: (item: T, index: number, items: T[]) => React.ReactNode;

  /**
   * Gap между ячейками в пикселях
   */
  gap?: number;
};

const Grid = <T,>({ cols, rows, items, renderItem, className, gap = 8 }: Props<T>) => {
  return (
    <div
      className={className}
      styleName="grid"
      style={
        {
          ['--grid-component-cols']: cols ?? 'none',
          ['--grid-component-rows']: rows ?? 'none',
          ['--grid-component-gap']: `${gap}px`,
        } as React.CSSProperties
      }
    >
      {items && renderItem && items.map(renderItem)}
    </div>
  );
};

export default observer(Grid) as typeof Grid;
