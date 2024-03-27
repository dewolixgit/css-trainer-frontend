import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { CodeInput } from 'components/CodeInput';
import { CodeContainer } from 'components/ui';
import { IInputFlowOnlyCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowOnlyCode';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement/types';
import { IPartCodeMixedRowTextElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowTextElement/types';
import { PartCodeMixedRowElementType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/types';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/types';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow/types';
import { PartCodeRowType } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/types';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/types';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock/types';

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

const ExerciseSet: React.FC = () => {
  return (
    <div>
      Набор упражнений
      <CodeContainer linesCount={10} lineCounterTheme="secondary" mainTheme={null} />
      <CodeInput input={input} />
      <CodeInput input={input2} />
    </div>
  );
};

export default observer(ExerciseSet);
