import * as React from 'react';

export type SvgrComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

export type FalsyType = false | null | undefined | '' | 0;

export type MapKey = string | number | symbol;

export type BaseResponse<D = undefined, E = undefined> =
  | (E extends undefined
      ? {
          isError: true;
        }
      : {
          isError: true;
          data: E;
        })
  | (D extends undefined
      ? {
          isError: false;
        }
      : {
          isError: false;
          data: D;
        });
