declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.c.svg' {
  import * as React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.component.svg' {
  import * as React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
