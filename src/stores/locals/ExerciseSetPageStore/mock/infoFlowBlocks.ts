import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InfoFlowImageBlockApi } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowImageBlock';
import { InfoFlowTextBlockApi } from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';

export const INFO_FLOW_BLOCKS_MOCK: (InfoFlowTextBlockApi | InfoFlowImageBlockApi)[] = [
  {
    id: 1,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.image,
    url: 'https://placekitten.com/1280/720',
    alt: 'Kitten',
    linesHeight: 10,
  },
  {
    id: 3,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque egestas diam. Gravida cum sociis natoque penatibus et magnis dis parturient. Porttitor lacus luctus accumsan tortor. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Nec nam aliquam sem et tortor. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ultricies tristique nulla aliquet enim tortor. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Venenatis cras sed felis eget. Tortor posuere ac ut consequat semper. Eget nunc scelerisque viverra mauris in aliquam sem. Eget lorem dolor sed viverra ipsum nunc. Molestie at elementum eu facilisis sed. Dolor sed viverra ipsum nunc aliquet bibendum. Et leo duis ut diam quam nulla. Pharetra pharetra massa massa ultricies mi quis. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Vitae suscipit tellus mauris a diam maecenas. Pellentesque elit eget gravida cum sociis natoque penatibus',
  },
  {
    id: 4,
    contentType: ContentFlowBlockType.info,
    infoType: InfoFlowBlockType.text,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
