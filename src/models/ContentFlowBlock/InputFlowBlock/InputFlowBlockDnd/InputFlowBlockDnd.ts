import { action, computed, makeObservable, observable } from 'mobx';

import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import {
  IInputFlowDnd,
  InputFlowDndApi,
  InputFlowDndParams,
} from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd';
import { IInputFlowDndOption } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowDnd/inputFlowDndOption';
import { InputFlowBlock } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowBlock';

type PrivateFields = '_order';

export class InputFlowBlockDnd extends InputFlowBlock implements IInputFlowDnd {
  readonly inputType = InputFlowType.dragAndDrop;

  private _order: IInputFlowDndOption['id'][];
  private readonly _optionsMap: Record<IInputFlowDndOption['id'], IInputFlowDndOption>;

  constructor(params: InputFlowDndParams) {
    super({ id: params.id });

    this._order = params.options.map((o) => o.id);
    this._optionsMap = params.options.reduce<
      Record<IInputFlowDndOption['id'], IInputFlowDndOption>
    >((acc, option) => {
      acc[option.id] = option;

      return acc;
    }, {});

    makeObservable<this, PrivateFields>(this, {
      _order: observable.ref,

      options: computed,

      setOrder: action.bound,
    });
  }

  get options(): IInputFlowDndOption[] {
    return this._order.map((id) => this._optionsMap[id]);
  }

  setOrder(order: IInputFlowDndOption['id'][]): void {
    this._order = order;
  }

  static fromApi(api: InputFlowDndApi): InputFlowBlockDnd {
    return new InputFlowBlockDnd({
      ...InputFlowBlock.transformApiFields(api),
      options: api.options.map((apiOption) => ({
        id: apiOption.id,
        code: apiOption.code,
      })),
    });
  }
}
