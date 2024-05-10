import { IField } from 'entities/fieldModel';
import { IUser } from 'entities/user/types';
import { MetaModel } from 'models/MetaModel';

export interface IUserStore {
  readonly meta: MetaModel;
  readonly user: IField<IUser | null>;

  readonly isAuthenticated: boolean;

  setUser(user: IUser | null): void;
  logout(): Promise<void>;
}
