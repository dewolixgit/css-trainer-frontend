import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeInput, CodePlacer } from 'components';
import { Popover, PopoverTrigger } from 'components/Popover';
import { ThemedPopoverContent } from 'components/Popover/ThemedPopoverContent';
import { CodeContainer, Spacing } from 'components/ui';
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

const input = makeObservable<IInputFlowPartCode>({
  id: 1,
  inputType: InputFlowType.partText,
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
            symbolsLength: 10,
            _v: '',
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
  ],
});

const input2 = makeObservable<IInputFlowOnlyCode & { _v: string }>(
  {
    id: 1,
    inputType: InputFlowType.textArea,
    _v: '',
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
    _o: [1, 2, 3],
    setOrder(order: IInputFlowDndOption['id'][]) {
      this._o = order;

      console.log('options', this.options);
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

const ExerciseSet: React.FC = () => {
  return (
    <div>
      Набор упражнений
      <CodeContainer linesCount={10} lineCounterTheme="secondary" mainTheme={null} />
      <CodeInput input={input} />
      <CodeInput input={input2} />
      <CodePlacer input={placer} />
      <Spacing size={48} />
      <Popover>
        <PopoverTrigger asChild>
          <div
            style={{
              width: 100,
              background: 'blue',
              margin: 'auto',
            }}
          >
            trigger
          </div>
        </PopoverTrigger>
        <ThemedPopoverContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolor dolores doloribus
          iure quae quas qui saepe sit veniam!
        </ThemedPopoverContent>
      </Popover>
      <Spacing size={1000} />
    </div>
  );
};

export default observer(ExerciseSet);
