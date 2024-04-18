import { ILocalStore } from 'config/localStore';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { IField } from 'entities/fieldModel';

export interface ITaskStylistPlugin extends ILocalStore {
  stylize(): string;
}

export type TaskStylistPluginParams = {
  inputs: InputFlowBlockInterfaceUnion[];
};

export interface ITaskStylist extends ILocalStore {
  readonly iframe: IField<HTMLIFrameElement | null>;
  readonly initialized: boolean;
  init(iframe: HTMLIFrameElement): void;
  stylize(): void;
}

export type TaskStylistParams = {
  inputs: InputFlowBlockInterfaceUnion[];
  stylistPlugin: ITaskStylistPlugin;
};
