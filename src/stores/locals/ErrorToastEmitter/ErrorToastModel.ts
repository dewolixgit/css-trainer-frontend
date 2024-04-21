import { ErrorToastModelParams, IErrorToastModel } from 'config/components/errorToastEmitter';
import { FieldModel } from 'models/FieldModel';

export class ErrorToastModel implements IErrorToastModel {
  readonly open = new FieldModel<boolean>(false);

  readonly text: string;

  constructor(params: ErrorToastModelParams) {
    this.text = params.text;
  }
}
