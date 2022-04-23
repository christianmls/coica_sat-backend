import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserCreator} from '../../../../../Contexts/CoicaSat/Users/application/UserCreator';

type UserPostRequest = Request & {
  body: {
    id: string;
    email: string;
    password: string;
    names: string;
    lastNames: string;
    phone: string;
    birthDate: Date;
    country: string;
  };
};
export class UserPostController implements Controller {
  constructor(private userCreator: UserCreator) {}

  async run(req: UserPostRequest, res: Response) {
    try {
      const { id, email, password, role, names, lastNames, phone, birthDate, country } = req.body;
      await this.userCreator.run({ id, email, password, role, names, lastNames, phone, birthDate, country });
      res.status(httpStatus.CREATED).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
