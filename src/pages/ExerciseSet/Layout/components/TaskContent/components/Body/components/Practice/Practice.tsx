import { observer } from 'mobx-react';
import * as React from 'react';

import { ContentFlowBlock } from 'components/ContentFlowBlock';
import { Title } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { ITaskProgressModel } from 'config/store/exerciseSetPageStore';

import './Practice.module.scss';

// const input = makeObservable<IInputFlowPartCode>({
//   id: 1,
//   inputType: InputFlowType.partText,
//   contentType: ContentFlowBlockType.input,
//   get linesCount(): number {
//     return this.rows.reduce(
//       (acc, r) => (r.type === PartCodeRowType.code ? acc + r.linesCount : acc + 1),
//       0
//     );
//   },
//   rows: [
//     makeAutoObservable<IPartCodeMixedRow>({
//       id: 1,
//       type: PartCodeRowType.mixed,
//       tabs: 0,
//       elements: [
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 1,
//           type: PartCodeMixedRowElementType.text,
//           text: '.my-class {',
//         }),
//       ],
//     }),
//     makeObservable<IPartCodeMixedRow>({
//       id: 2,
//       type: PartCodeRowType.mixed,
//       tabs: 1,
//       elements: [
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 1,
//           type: PartCodeMixedRowElementType.text,
//           text: 'my-rule:\xa0',
//         }),
//         makeAutoObservable<IPartCodeMixedRowCodeElement & { _v: string }>(
//           {
//             id: 2,
//             type: PartCodeMixedRowElementType.code,
//             symbolsLength: 20,
//             _v: '',
//             get empty(): boolean {
//               return !this._v;
//             },
//             get value(): string {
//               return this._v;
//             },
//             changeValue(value: string) {
//               this._v = value;
//             },
//             reset() {},
//           },
//           {
//             changeValue: action.bound,
//           }
//         ),
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 3,
//           type: PartCodeMixedRowElementType.text,
//           text: ';',
//         }),
//       ],
//     }),
//     makeObservable<IPartCodeMixedRow>({
//       id: 3,
//       type: PartCodeRowType.mixed,
//       tabs: 1,
//       elements: [
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 1,
//           type: PartCodeMixedRowElementType.text,
//           text: 'my-second-rule: subrule(',
//         }),
//         makeAutoObservable<IPartCodeMixedRowCodeElement & { _v: string }>(
//           {
//             id: 2,
//             type: PartCodeMixedRowElementType.code,
//             symbolsLength: 7,
//             _v: '',
//             get empty(): boolean {
//               return !this._v;
//             },
//             get value(): string {
//               return this._v;
//             },
//             changeValue(value: string) {
//               this._v = value;
//             },
//             reset() {},
//           },
//           {
//             changeValue: action.bound,
//           }
//         ),
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 3,
//           type: PartCodeMixedRowElementType.text,
//           text: ');',
//         }),
//       ],
//     }),
//     makeObservable<IPartCodeOnlyRow & { _v: string }>(
//       {
//         id: 4,
//         type: PartCodeRowType.code,
//         tabs: 1,
//         linesCount: 2,
//         _v: '',
//         get empty(): boolean {
//           return !this._v;
//         },
//         get value(): string {
//           return this._v;
//         },
//         changeValue(value: string) {
//           this._v = value;
//         },
//         reset() {},
//       },
//       {
//         _v: observable,
//         value: computed,
//         changeValue: action.bound,
//       }
//     ),
//     makeAutoObservable<IPartCodeMixedRow>({
//       id: 5,
//       type: PartCodeRowType.mixed,
//       tabs: 0,
//       elements: [
//         makeAutoObservable<IPartCodeMixedRowTextElement>({
//           id: 1,
//           type: PartCodeMixedRowElementType.text,
//           text: '}',
//         }),
//       ],
//     }),
//   ],
// });
//
// const input2 = makeObservable<IInputFlowOnlyCode & { _v: string }>(
//   {
//     id: 1,
//     inputType: InputFlowType.textArea,
//     contentType: ContentFlowBlockType.input,
//     _v: '',
//     get empty(): boolean {
//       return !this._v;
//     },
//     get value(): string {
//       return this._v;
//     },
//     changeValue(value: string) {
//       this._v = value;
//     },
//     reset() {},
//     linesCount: 3,
//   },
//   {
//     _v: observable,
//     value: computed,
//     changeValue: action.bound,
//   }
// );
//
// const map: Record<number, IInputFlowDndOption> = {
//   [1]: {
//     id: 1,
//     code: '.class {\n  padding-top: 40px;\n}',
//   },
//   [2]: {
//     id: 2,
//     code: '.class {\n  padding: 10px 20px;\n}',
//   },
//   [3]: {
//     id: 3,
//     code: '.class {\n  padding-bottom: 10px;\n}',
//   },
// };
//
// const placer = makeObservable<IInputFlowDnd & { _o: number[] }>(
//   {
//     id: 1,
//     inputType: InputFlowType.dragAndDrop,
//     contentType: ContentFlowBlockType.input,
//     _o: [1, 2, 3],
//     setOrder(order: IInputFlowDndOption['id'][]) {
//       this._o = order;
//     },
//     get options(): IInputFlowDndOption[] {
//       return this._o.map((id) => map[id]);
//     },
//   },
//   {
//     options: computed,
//     setOrder: action.bound,
//     _o: observable.ref,
//   }
// );

type Props = {
  className?: string;
  taskProgress: ITaskProgressModel;
};

const Practice: React.FC<Props> = ({ taskProgress, className }) => {
  return (
    <div styleName="root" className={className}>
      <Title tag="h1" size={SizeEnum.m} weight={FontWeightEnum.medium}>
        {taskProgress.task.name}
      </Title>
      {taskProgress.content.map((block) => {
        return <ContentFlowBlock key={block.id} content={block} styleName="block" />;
      })}
    </div>
  );
};

export default observer(Practice);
