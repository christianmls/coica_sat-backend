import {Request} from 'express';

export type UserLoggedRequest = Request & {
  user: {
    id: string;
    role: Array<string>;
    country: string;
  };
};
