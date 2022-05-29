import { Response } from 'express';
import {Controller} from '../Controller';
import {UserLoggedRequest} from '../../shared/types';
import {UserByIdFinder} from '../../../../../Contexts/CoicaSat/Users/application/UserByIdFinder';
import httpStatus from 'http-status';

export class TokenVerificationGetController implements  Controller {

  constructor(private userByIdFinder: UserByIdFinder) {
  }

  async run(req: UserLoggedRequest, res: Response) {
    const { id } = req.user;
    const user = await this.userByIdFinder.run(id);
    if(!user) {
       res.status(httpStatus.UNAUTHORIZED).send({
        error: 'User not found'
      });
    } else {
      res.status(httpStatus.OK).json({
        user
      });
    }
  }
}
