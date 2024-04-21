import { BasePromiseResponse } from 'types/props';
import { sleep } from 'utils/async';

export class AuthPageApiAdapter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async login(params: { password: string; email: string }): BasePromiseResponse<
    true,
    {
      validationErrorText: string | null;
    }
  > {
    await sleep(2000);

    return {
      isError: false,
      data: true,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async register(params: { password: string; email: string }): BasePromiseResponse<
    true,
    {
      validationErrorText: string | null;
    }
  > {
    await sleep(2000);

    return {
      isError: false,
      data: true,
    };
  }
}
