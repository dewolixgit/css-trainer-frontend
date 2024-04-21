import { createContextLocalStore } from 'config/localStore';
import { ErrorToastEmitter } from 'stores/locals/ErrorToastEmitter/ErrorToastEmitter';

export const { useStore: useErrorToastEmitter, Provider: ErrorToastEmitterProvider } =
  createContextLocalStore(ErrorToastEmitter);
