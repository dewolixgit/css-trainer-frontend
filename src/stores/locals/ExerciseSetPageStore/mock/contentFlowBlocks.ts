import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType, FlowBlockApiUnion } from 'entities/contentFlowBlock/types';

export const CONTENT_FLOW_BLOCKS_MOCK: FlowBlockApiUnion[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Sodales ut eu sem integer. Vitae purus faucibus ornare suspendisse. Consectetur libero id faucibus nisl tincidunt eget nullam. Magna ac placerat vestibulum lectus. Vestibulum mattis ullamcorper velit sed. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.image,
    url: 'https://picsum.photos/720/1280',
    linesHeight: 18,
    alt: 'Some random image',
  },
  {
    id: 3,
    contentType: ContentFlowBlockType.input,
    inputType: InputFlowType.dragAndDrop,
    options: [
      {
        id: 1,
        code: '.class {\n  padding-top: 40px;\n}',
      },
      {
        id: 2,
        code: '.class {\n  padding: 10px 20px;\n}',
      },
      {
        id: 3,
        code: '.class {\n  padding-bottom: 10px;\n}',
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
