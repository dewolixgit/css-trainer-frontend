import * as React from 'react';

export type CommonProps = {
  className?: string;
  children?: React.ReactNode;
};

export type FalsyType = false | null | undefined | '' | 0;

export type MapKey = string | number | symbol;
