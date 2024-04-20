import { NBSP } from 'config/code';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { ContentFlowBlockType, FlowBlockApiUnion } from 'entities/contentFlowBlock/types';
import { SET_1_CLASSNAMES } from 'models/exersices/Set1/config';

export const CONTENT_FLOW_BLOCKS_MOCK_1: FlowBlockApiUnion[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Sodales ut eu sem integer. Vitae purus faucibus ornare suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam. Magna ac placerat vestibulum lectus. Vestibulum mattis ullamcorper velit sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.input,
    inputType: InputFlowType.partText,
    rows: [
      {
        id: 1,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: `.${SET_1_CLASSNAMES.text} {`,
          },
        ],
      },
      {
        id: 2,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: `color:${NBSP}`,
          },
          {
            id: 2,
            type: PartCodeMixedRowElementType.code,
            value: 'red',
            symbolsLength: 10,
          },
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: ';',
          },
        ],
      },
      {
        id: 3,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: '}',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Viverra justo nec ultrices dui sapien eget mi proin. Elementum facilisis leo vel fringilla est...',
  },
];

export const CONTENT_FLOW_BLOCKS_MOCK_2: FlowBlockApiUnion[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Sodales ut eu sem integer. Vitae purus faucibus ornare suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam. Magna ac placerat vestibulum lectus. Vestibulum mattis ullamcorper velit sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.input,
    inputType: InputFlowType.partText,
    rows: [
      {
        id: 1,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: `.${SET_1_CLASSNAMES.background} {`,
          },
        ],
      },
      {
        id: 2,
        type: PartCodeRowType.code,
        tabs: 1,
        value: '',
        linesCount: 1,
      },
      {
        id: 3,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: '}',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Viverra justo nec ultrices dui sapien eget mi proin. Elementum facilisis leo vel fringilla est...',
  },
];

export const CONTENT_FLOW_BLOCKS_MOCK_3: FlowBlockApiUnion[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Sodales ut eu sem integer. Vitae purus faucibus ornare suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam. Magna ac placerat vestibulum lectus. Vestibulum mattis ullamcorper velit sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.input,
    inputType: InputFlowType.partText,
    rows: [
      {
        id: 1,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.code,
            value: '',
            symbolsLength: 10,
          },
          {
            id: 2,
            type: PartCodeMixedRowElementType.text,
            text: `${NBSP}{`,
          },
        ],
      },
      {
        id: 2,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: 'top: 700px;',
          },
        ],
      },
      {
        id: 3,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: 'left: 20px;',
          },
        ],
      },
      {
        id: 4,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: '}',
          },
        ],
      },
      {
        id: 5,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: NBSP,
          },
        ],
      },
      {
        id: 6,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.code,
            value: '',
            symbolsLength: 15,
          },
          {
            id: 2,
            type: PartCodeMixedRowElementType.text,
            text: `${NBSP}{`,
          },
        ],
      },
      {
        id: 7,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: 'top: 620px;',
          },
        ],
      },
      {
        id: 72,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: 'left: 220px;',
          },
        ],
      },
      {
        id: 8,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: '}',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Viverra justo nec ultrices dui sapien eget mi proin. Elementum facilisis leo vel fringilla est...',
  },
];

export const CONTENT_FLOW_BLOCKS_MOCK_4: FlowBlockApiUnion[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Sodales ut eu sem integer. Vitae purus faucibus ornare suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam. Magna ac placerat vestibulum lectus. Vestibulum mattis ullamcorper velit sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.input,
    inputType: InputFlowType.partText,
    rows: [
      {
        id: 1,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.code,
            value: '',
            symbolsLength: 15,
          },
          {
            id: 2,
            type: PartCodeMixedRowElementType.text,
            text: `${NBSP}{`,
          },
        ],
      },
      {
        id: 2,
        type: PartCodeRowType.mixed,
        tabs: 1,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: 'opacity: 1;',
          },
        ],
      },
      {
        id: 3,
        type: PartCodeRowType.mixed,
        tabs: 0,
        elements: [
          {
            id: 1,
            type: PartCodeMixedRowElementType.text,
            text: '}',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Viverra justo nec ultrices dui sapien eget mi proin. Elementum facilisis leo vel fringilla est...',
  },
];

export const TASKS_MOCK = {
  [1]: CONTENT_FLOW_BLOCKS_MOCK_1,
  [2]: CONTENT_FLOW_BLOCKS_MOCK_2,
  [3]: CONTENT_FLOW_BLOCKS_MOCK_3,
  [4]: CONTENT_FLOW_BLOCKS_MOCK_4,
};
