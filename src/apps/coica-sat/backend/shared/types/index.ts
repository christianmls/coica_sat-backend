import {Request} from 'express';

export type TokenVerifyGetRequest = Request & {
  user: {
    id: string;
  };
};
