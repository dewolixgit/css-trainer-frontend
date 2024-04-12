import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeInput, CodePlacer } from 'components';
import { Spacing } from 'components/ui';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { IInputFlowDnd } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd';
import { IInputFlowDndOption } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd/inputFlowDndOption';
import { IInputFlowOnlyCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowOnlyCode';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { IPartCodeMixedRowTextElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';

const input = makeObservable<IInputFlowPartCode>({
  id: 1,
  inputType: InputFlowType.partText,
  contentType: ContentFlowBlockType.input,
  get linesCount(): number {
    return this.rows.reduce(
      (acc, r) => (r.type === PartCodeRowType.code ? acc + r.linesCount : acc + 1),
      0
    );
  },
  rows: [
    makeAutoObservable<IPartCodeMixedRow>({
      id: 1,
      type: PartCodeRowType.mixed,
      tabs: 0,
      elements: [
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 1,
          type: PartCodeMixedRowElementType.text,
          text: '.my-class {',
        }),
      ],
    }),
    makeObservable<IPartCodeMixedRow>({
      id: 2,
      type: PartCodeRowType.mixed,
      tabs: 1,
      elements: [
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 1,
          type: PartCodeMixedRowElementType.text,
          text: 'my-rule:\xa0',
        }),
        makeAutoObservable<IPartCodeMixedRowCodeElement & { _v: string }>(
          {
            id: 2,
            type: PartCodeMixedRowElementType.code,
            symbolsLength: 20,
            _v: '',
            get empty(): boolean {
              return !this._v;
            },
            get value(): string {
              return this._v;
            },
            changeValue(value: string) {
              this._v = value;
            },
            reset() {},
          },
          {
            changeValue: action.bound,
          }
        ),
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 3,
          type: PartCodeMixedRowElementType.text,
          text: ';',
        }),
      ],
    }),
    makeObservable<IPartCodeMixedRow>({
      id: 3,
      type: PartCodeRowType.mixed,
      tabs: 1,
      elements: [
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 1,
          type: PartCodeMixedRowElementType.text,
          text: 'my-second-rule: subrule(',
        }),
        makeAutoObservable<IPartCodeMixedRowCodeElement & { _v: string }>(
          {
            id: 2,
            type: PartCodeMixedRowElementType.code,
            symbolsLength: 7,
            _v: '',
            get empty(): boolean {
              return !this._v;
            },
            get value(): string {
              return this._v;
            },
            changeValue(value: string) {
              this._v = value;
            },
            reset() {},
          },
          {
            changeValue: action.bound,
          }
        ),
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 3,
          type: PartCodeMixedRowElementType.text,
          text: ');',
        }),
      ],
    }),
    makeObservable<IPartCodeOnlyRow & { _v: string }>(
      {
        id: 4,
        type: PartCodeRowType.code,
        tabs: 1,
        linesCount: 2,
        _v: '',
        get empty(): boolean {
          return !this._v;
        },
        get value(): string {
          return this._v;
        },
        changeValue(value: string) {
          this._v = value;
        },
        reset() {},
      },
      {
        _v: observable,
        value: computed,
        changeValue: action.bound,
      }
    ),
    makeAutoObservable<IPartCodeMixedRow>({
      id: 5,
      type: PartCodeRowType.mixed,
      tabs: 0,
      elements: [
        makeAutoObservable<IPartCodeMixedRowTextElement>({
          id: 1,
          type: PartCodeMixedRowElementType.text,
          text: '}',
        }),
      ],
    }),
  ],
});

const input2 = makeObservable<IInputFlowOnlyCode & { _v: string }>(
  {
    id: 1,
    inputType: InputFlowType.textArea,
    contentType: ContentFlowBlockType.input,
    _v: '',
    get empty(): boolean {
      return !this._v;
    },
    get value(): string {
      return this._v;
    },
    changeValue(value: string) {
      this._v = value;
    },
    reset() {},
    linesCount: 3,
  },
  {
    _v: observable,
    value: computed,
    changeValue: action.bound,
  }
);

const map: Record<number, IInputFlowDndOption> = {
  [1]: {
    id: 1,
    code: '.class {\n  padding-top: 40px;\n}',
  },
  [2]: {
    id: 2,
    code: '.class {\n  padding: 10px 20px;\n}',
  },
  [3]: {
    id: 3,
    code: '.class {\n  padding-bottom: 10px;\n}',
  },
};

const placer = makeObservable<IInputFlowDnd & { _o: number[] }>(
  {
    id: 1,
    inputType: InputFlowType.dragAndDrop,
    contentType: ContentFlowBlockType.input,
    _o: [1, 2, 3],
    setOrder(order: IInputFlowDndOption['id'][]) {
      this._o = order;
    },
    get options(): IInputFlowDndOption[] {
      return this._o.map((id) => map[id]);
    },
  },
  {
    options: computed,
    setOrder: action.bound,
    _o: observable.ref,
  }
);

const Practice: React.FC = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet animi corporis cumque
      dolorem dolores ea eius, fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat
      quas quasi quos repellat repellendus suscipit tempore ut veniam. A, aut distinctio harum id
      iste itaque iure labore magni minima obcaecati perspiciatis sapiente sint sunt ut
      voluptatibus. Accusamus aliquam doloribus inventore iste maiores maxime non numquam odit
      perspiciatis quas recusandae reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae
      recusandae unde! Dolor dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta
      dolor harum, incidunt
      <CodeInput input={input} />
      <Spacing />
      <CodeInput input={input2} />
      <Spacing />
      <CodePlacer input={placer} />
      <Spacing />
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe? Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. A, amet animi corporis cumque dolorem dolores ea eius,
      fugit hic ipsum itaque molestias natus nesciunt nisi quae quaerat quas quasi quos repellat
      repellendus suscipit tempore ut veniam. A, aut distinctio harum id iste itaque iure labore
      magni minima obcaecati perspiciatis sapiente sint sunt ut voluptatibus. Accusamus aliquam
      doloribus inventore iste maiores maxime non numquam odit perspiciatis quas recusandae
      reprehenderit sequi, vel! Beatae cumque dolorem, ipsa neque quae recusandae unde! Dolor
      dolores ipsum molestias quo totam veniam voluptatum. Assumenda dicta dolor harum, incidunt
      inventore ipsum libero magnam minima nesciunt nobis officia provident repellat repellendus
      reprehenderit repudiandae sunt tempora veniam veritatis vero voluptatem. Adipisci aut
      cupiditate delectus, doloremque maiores quia? Doloremque, nesciunt, saepe?
    </div>
  );
};

export default observer(Practice);
