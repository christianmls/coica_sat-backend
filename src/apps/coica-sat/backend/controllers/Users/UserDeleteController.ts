import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserRemover} from '../../../../../Contexts/CoicaSat/Users/application/UserRemover';

export class UserDeleteController implements Controller {
  constructor(private userRemover: UserRemover) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.userRemover.run(id);
      res.status(httpStatus.NO_CONTENT).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
