import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserFinder} from '../../../../../Contexts/CoicaSat/Users/application/UserFinder';


export class UserGetController implements Controller {
  constructor(private userFinder: UserFinder) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.userFinder.run();
      res.status(httpStatus.OK).send(users);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
