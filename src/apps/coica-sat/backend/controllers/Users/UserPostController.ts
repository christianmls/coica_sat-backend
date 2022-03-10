import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserCreator} from '../../../../../Contexts/CoicaSat/Users/application/UserCreator';

type UserPostRequest = Request & {
  body: {
    id: string;
    email: string;
    password: string;
    employeeId: string;
    roleId: string;
  };
};
export class UserPostController implements Controller {
  constructor(private userCreator: UserCreator) {}

  async run(req: UserPostRequest, res: Response) {
    try {
      const { id, email, password, role } = req.body;
      await this.userCreator.run({ id, email, password, role });
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
