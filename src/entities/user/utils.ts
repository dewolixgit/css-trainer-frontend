import { IUser, UserApiType } from 'entities/user/types';

export const transformUser = (raw: UserApiType): IUser => ({
  id: raw.id,
  email: raw.email,
});
