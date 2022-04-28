import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserByIdFinder} from '../../../../../Contexts/CoicaSat/Users/application/UserByIdFinder';

export class UserGetOneController implements Controller {
  constructor(private userByIdFinder: UserByIdFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const department = await this.userByIdFinder.run(id);
      res.status(httpStatus.OK).send(department);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
