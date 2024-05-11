export enum HeadersKeys {
  authorization = 'Authorization',
}

export type ApiMessageCommonResponse = {
  message: string;
};

export type ApiAuthCommonResponse = {
  id: number;
  email: string;
  accessToken: string;
};
