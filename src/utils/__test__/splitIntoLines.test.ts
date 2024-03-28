import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';

import splitIntoLines from 'utils/markup/splitIntoLines';

type ConfigItemType = {
  divider: undefined | string;
  inputString: string;
  expectHtml: string;
  amountOfLines: number;
};

const CONFIG: ConfigItemType[] = [
  {
    divider: undefined,
    inputString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    amountOfLines: 1,
  },
  {
    divider: undefined,
    inputString: 'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit',
    amountOfLines: 2,
  },
  {
    divider: undefined,
    inputString: 'Lorem ipsum do\nlor sit amet\n, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum do<br />lor sit amet<br />, consectetur adipiscing elit',
    amountOfLines: 3,
  },
  {
    divider: '@',
    inputString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    amountOfLines: 1,
  },
  {
    divider: '@',
    inputString: 'Lorem ipsum dolor sit amet, consectetur@adipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit',
    amountOfLines: 2,
  },
  {
    divider: '@',
    inputString: 'Lorem ipsum do@lor sit amet@, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum do<br />lor sit amet<br />, consectetur adipiscing elit',
    amountOfLines: 3,
  },
  {
    divider: '&split;',
    inputString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    amountOfLines: 1,
  },
  {
    divider: '&split;',
    inputString: 'Lorem ipsum dolor sit amet, consectetur&split;adipiscing elit',
    expectHtml: 'Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit',
    amountOfLines: 2,
  },
  {
    divider: '&split;',
    inputString: 'Lorem ipsum do&split;lor sit amet&split;, consectetur adipiscing elit',
    expectHtml: 'Lorem ipsum do<br />lor sit amet<br />, consectetur adipiscing elit',
    amountOfLines: 3,
  },
];

describe('Function splitIntoLines', () => {
  afterEach(cleanup);

  CONFIG.forEach(({ divider, inputString, amountOfLines, expectHtml }) => {
    it(`Divider: ${
      divider ? `"${divider}"` : 'default'
    }; amount of lines: ${amountOfLines}`, () => {
      const { markup, linesCount } = splitIntoLines(inputString, divider);

      const { container } = render(markup);

      expect(container).toContainHTML(expectHtml);
      expect(linesCount).toBe(amountOfLines);
    });
  });

  it('Empty input text', () => {
    const { markup, linesCount } = splitIntoLines('');

    const { container } = render(markup);

    expect(container).toBeEmptyDOMElement();
    expect(linesCount).toBe(0);
  });

  it('Empty string divider', () => {
    const input = 'Lorem ipsum';

    const { markup, linesCount } = splitIntoLines(input, '');

    const { container } = render(markup);

    expect(container).toContainHTML(input.split('').join('<br />'));
    expect(linesCount).toBe(input.split('').length);
  });
});
