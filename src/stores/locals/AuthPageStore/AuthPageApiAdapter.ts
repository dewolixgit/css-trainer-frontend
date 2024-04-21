import { IUser } from 'entities/user';
import { BasePromiseResponse } from 'types/props';
import { sleep } from 'utils/async';

export class AuthPageApiAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async login(params: { password: string; email: string }): BasePromiseResponse<
    IUser,
    {
      validationErrorText: string | null;
    }
  > {
    await sleep(2000);

    return {
      isError: false,
      data: {
        id: 1,
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async register(params: { password: string; email: string }): BasePromiseResponse<
    IUser,
    {
      validationErrorText: string | null;
    }
  > {
    await sleep(2000);

    return {
      isError: false,
      data: {
        id: 1,
      },
    };
  }
}
