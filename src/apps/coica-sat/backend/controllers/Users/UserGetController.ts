import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserFinder} from '../../../../../Contexts/CoicaSat/Users/application/UserFinder';
import {getPaginationFromQuery} from '../../services/Utility';


export class UserGetController implements Controller {
  constructor(private userFinder: UserFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const users = await this.userFinder.run({ pageNumber, nPerPage });
      res.status(httpStatus.OK).send(users);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
