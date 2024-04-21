import { IErrorToastEmitter, IErrorToastModel } from 'config/components/errorToastEmitter';
import { FieldModel } from 'models/FieldModel';
import { ErrorToastModel } from 'stores/locals/ErrorToastEmitter/ErrorToastModel';

export class ErrorToastEmitter implements IErrorToastEmitter {
  readonly toasts = new FieldModel<IErrorToastModel[]>([]);

  showErrorToast(text: string): void {
    this.toasts.changeValue([new ErrorToastModel({ text })]);
    this.toasts.value[0].open.changeValue(true);
  }

  showMultipleErrorToasts(texts: string[]): void {
    this.toasts.changeValue(texts.map((text) => new ErrorToastModel({ text })));
    this.toasts.value.forEach((item) => item.open.changeValue(true));
  }

  reset(): void {
    this.toasts.value.forEach((item) => item.open.changeValue(false));
    this.toasts.changeValue([]);
  }

  destroy() {}
}
