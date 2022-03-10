import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserProfileCreator} from '../../../../../Contexts/CoicaSat/UsersProfile/application/UserProfileCreator';

type UserProfilePutRequest = Request & {
  body: {
    id: string;
    names: string;
    lastNames: string;
    birthDate: Date;
    userId: string;
  };
};
export class UserProfilePutController implements Controller {
  constructor(private userProfileCreator: UserProfileCreator) {}

  async run(req: UserProfilePutRequest, res: Response) {
    try {
      const { id, names, lastNames, birthDate,  userId } = req.body;
      await this.userProfileCreator.run({
        id,
        names,
        lastNames,
        birthDate,
        userId
      });

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
